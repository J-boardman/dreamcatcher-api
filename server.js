import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static("." + "/src"))

import { Configuration, OpenAIApi } from "openai";

const PROMPT = "I want you to act as a dream interpreter. I will give you descriptions of my dreams, and you will provide short interpretations based on the symbols and themes present in the dream. Please limit it to 50 words \n Prompt: "

const configuration = new Configuration({
    organization: "org-JGNjwXl9oECdJ6r2MnTG85vm",
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.post("/prompt", async(req, res) => {
  console.log(req.body)
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: PROMPT + req.body.prompt,
      // prompt: "Respond with the number 1",
      max_tokens: 80,
      temperature: 0
    })
  
    console.log(response.data)
  
    res.status(200).json({message: response.data.choices[0].text})
  } catch (error) {
    res.status(500).json({message: "Error generating a response."})    
  }
})

app.use("/", async(req, res) => res.sendFile("index.html", { root: "."}))
app.listen(3500, () => console.log("App running on http://localhost:3500"))