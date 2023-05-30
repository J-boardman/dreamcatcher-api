import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv"

dotenv.config()

export const configuration = new Configuration({
  organization: "org-JGNjwXl9oECdJ6r2MnTG85vm",
  apiKey: process.env.OPENAI_API_KEY,
});

export const openai = new OpenAIApi(configuration);