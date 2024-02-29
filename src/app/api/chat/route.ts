import { getOpenAiClient } from "@/config/openai/Client";
import { projectBriefer } from "@/data/dataStore";
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

    // Detta funkar som instruktioner till modellen.
    const prompt = {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content: `
      BEGIN CONTEXT SECTION:
      ${projectBriefer}
      END OF CONTEXT SECTION:
       You are an AI assistant with the responsibility of providing assistance.
       Your job is to act as an assistant that will help onboad new employees into the project described in the CONTEXT SECTION.
       Answer any questions the new employee might have and provide them with the information they need to get started. 
      `,
    };

    const response = await openaiClient.createChatCompletion({
      model: "gpt-3.5-turbo",
      // Streama svaret.
      stream: true,
      // Skicka med prompten och det senaste meddelandet från användaren.
      messages: [prompt, lastMessage] as ChatCompletionRequestMessage[],
      // Använd en temperatur på 0.5 för att få mer varierade svar.
      temperature: 0.5,
      // Max antal tokens som ska genereras.
      max_tokens: 500,
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
