import { Configuration, OpenAIApi } from "openai-edge";

let client: OpenAIApi | null = null;

export const getOpenAiClient = () => {
  if (client === null) {
    const config = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
      organization: process.env.ORGANIZATION_ID,
    });

    client = new OpenAIApi(config);
  }

  return client;
};
