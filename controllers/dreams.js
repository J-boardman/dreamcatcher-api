import { Dream } from "../models/Dream.js";
import mongoose, { Mongoose } from "mongoose";
import { Configuration, OpenAIApi } from "openai";

export const getAllDreams = async (req, res) => {
  try {
    const dreams = await Dream.find();
    return dreams;
  } catch (error) {
    console.log(error);
  }
};

export const getDreamById = async (req, res) => {
  try {
    const dream = await Dream.findById(req.params.id);
    return dream;
  } catch (error) {
    console.log(error);
  }
};

export const deleteDream = async (req, res) => {
  try {
    const deletedDream = await Dream.deleteOne({ _id: req.params.id });
  } catch (error) {}
};

export const addDream = async (req, res) => {
  if (!req.body.user || !req.body.prompt) return;
  const { user, prompt } = req.body
  
  const configuration = new Configuration({
    organization: "org-JGNjwXl9oECdJ6r2MnTG85vm",
    apiKey: process.env.OPENAI_API_KEY,
  });
  
  const openai = new OpenAIApi(configuration);

  const PROMPT =
  "I want you to act as a dream interpreter. I will give you descriptions of my dreams, and you will provide short interpretations based on the symbols and themes present in the dream. Please limit it to 100 words \n Prompt: ";
  
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: PROMPT + prompt,
      // prompt: "Respond with the number 1",
      max_tokens: 80,
      temperature: 0,
    });

    const responseMessage = response.data.choices[0].text;

    const finalMessage = responseMessage.split("\n\n")[1];

    const dream = {
      prompt: prompt,
      response: finalMessage,
      author: user,
    };

    const newDream = new Dream(dream);
    await newDream.save();
    res.redirect(`/dreams/${newDream.id}`);
  } catch (error) {
    console.log(error);
  }
};
