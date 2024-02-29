import { getOpenAiClient } from "@/config/openai/Client";

const openaiClient = getOpenAiClient();

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const response = await openaiClient.createImage({
      prompt: prompt,
      size: "256x256",
      n: 1,
    });

    if (!response.ok) {
      return generateResponse({}, response.status);
    }

    return new Response(response.body, { status: 200 });
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
