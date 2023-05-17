import { deleteOne, getAll, getOne, insertOne } from "../models/dreams.js";

export const getAllDreams = async (req, res) => {
  try {
    const [dreams] = await getAll();
    if (!dreams) return res.status(204).json({ message: "No classes found" });
    res.json(dreams);
  } catch (error) {
    res.status(500).json({ message: "Failure" });
  }
};

export const getOneDream = async (req, res) => {
  try {
    const [dream] = await getOne(req.params.id);
    if (!dream) return res.status(204).json({ message: "No classes found" });
    res.json(dream);
  } catch (error) {
    res.status(500).json({ message: "Failure" });
  }
};

import { Configuration, OpenAIApi } from "openai";

const PROMPT =
  "I want you to act as a dream interpreter. I will give you descriptions of my dreams, and you will provide short interpretations based on the symbols and themes present in the dream. Please limit it to 50 words \n Prompt: ";

const configuration = new Configuration({
  organization: "org-JGNjwXl9oECdJ6r2MnTG85vm",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const addDream = async (req, res) => {
  console.log(req.body);
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: PROMPT + req.body.prompt,
      // prompt: "Respond with the number 1",
      max_tokens: 80,
      temperature: 0,
    });

    console.log(response.data);
    const responseMessage = response.data.choices[0].text;

    const finalMessage = responseMessage.split("\n\n")[1];
    insertOne(req.body.prompt, finalMessage);

    res.status(200).json({ message: finalMessage });
  } catch (error) {
    res.status(500).json({ message: "Error generating a response." });
  }
};

export const deleteDream = async (req, res) => {
  try {
    await deleteOne(req.params.id);
    res.status(200).json({ message: "Dream successfully deleted." });
  } catch (error) {
    res.status(500).json({ message: "Failure" });
  }
};
