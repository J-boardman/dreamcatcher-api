import { Configuration, OpenAIApi } from "openai";

export const configuration = new Configuration({
  organization: "org-JGNjwXl9oECdJ6r2MnTG85vm",
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export const openai = new OpenAIApi(configuration);