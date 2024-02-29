import { getOpenAiClient } from "@/config/openai/Client";
import { funnyProducts } from "@/data/dataStore";
import { Message, OpenAIStream, StreamingTextResponse } from "ai";
import {
  ChatCompletionRequestMessage,
  ChatCompletionRequestMessageRoleEnum,
} from "openai-edge";

const openaiClient = getOpenAiClient();

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const lastMessage = messages
      .filter((m: Message) => m.role === "user")
      .pop();

    const prompt = {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content: `
      BEGIN CONTEXT SECTION:
      ${funnyProducts
        .map((p, i) => `Product: ${i} - ${p.name} - ${p.description}`)
        .join(`\n`)}
      END OF CONTEXT SECTION:
       You are an AI assistant with the responsibility of providing assistance for users trying to find the right product in an ecommerce store.
       Inside of the CONTEXT SECTION you will find a list of products and their descriptions.
       Your job is to act as an assistant that will help the user find the product that fits them the best.
       The user will provide you with information about themselves and what they are looking for.
       Based on that information you will provide them with a product that fits them the best.
      You can use the information in the CONTEXT SECTION to help you with this task.
       `,
    };

    const response = await openaiClient.createChatCompletion({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [prompt, lastMessage] as ChatCompletionRequestMessage[],
      temperature: 0.5,
      max_tokens: 1000,
    });

    if (!response.ok) {
      return generateResponse({}, response.status);
    }

    const stream = OpenAIStream(response, {
      onFinal: async (message: string) => {
        // Här kan vi göra något med svaret efter att det är klart.
      },
    });

    return new StreamingTextResponse(stream);
  } catch (error: any) {
    return generateResponse(
      { error: error?.message || "Something went wrong!" },
      500
    );
  }
}

const generateResponse = (body: any, status: number) => {
  return new Response(JSON.stringify(body), {
    headers: { "Content-Type": "application/json" },
    status,
  });
};
