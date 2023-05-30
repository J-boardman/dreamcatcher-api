import { Dream } from "../models/Dream.js";
import mongoose, { Mongoose } from "mongoose";
import { openai } from "../config/openai.js"

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
  } catch (error) {
    console.log(error)
  }
};

export const addDream = async (req, res) => {
  const { user, prompt } = req.body
  if (!user || !prompt) {
    console.log("User or prompt invalid")
    return
  };

  const PROMPT =
  "I want you to act as a dream interpreter. I will give you descriptions of my dreams, and you will provide short interpretations based on the symbols and themes present in the dream. Prompt: ";
  
  try {
    console.log("Interpreting dream...")
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: PROMPT + prompt,
      // prompt: "Respond with the number 1",
      max_tokens: 256,
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
    console.log("Dream saved!")
    return res.status(200).json({ dream: newDream })
    res.redirect(`/dreams/${user}`);
  } catch (error) {
    console.log(error);
  }
};
