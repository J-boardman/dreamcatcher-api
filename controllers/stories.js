import { Story } from "../models/Story.js";
import mongoose, { Mongoose } from "mongoose";
import { openai } from "../config/openai.js"
import { Dream } from "../models/Dream.js";

export const getAllStories = async (req, res) => {
  try {
    const stories = await Story.find();
    return stories;
  } catch (error) {
    console.log(error);
  }
};

export const getStoryById = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    return story;
  } catch (error) {
    console.log(error);
  }
};

export const deleteStory = async (req, res) => {
  try {
    const deletedStory = await Story.deleteOne({ _id: req.params.id });
  } catch (error) {
    console.log(error)
  }
};

export const addStory = async (req, res) => {
  const { dreamID, prompt } = req.body
  if (!dreamID || !prompt) {
    console.log("\nDream ID or prompt invalid")
    return
  };

  const PROMPT =
  " I will give you descriptions of my dream, and you will provide a short wholesome bedtime story based on the symbols and themes present in the dream. There should be no dreaming within the story. Please limit the story to 200 words. Dream: ";
  
  try {
    console.log("\nGenerating story...")
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: PROMPT + prompt,
      // prompt: "Respond with the number 1",
      max_tokens: 256,
      temperature: 0.8,
    });

    const storyBody = response.data.choices[0].text;
    console.log(response.data.choices)

    console.log("\nStory Generated!")

    console.log("\nGenerating a story summary...")
    const summaryResponse = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "please provide a short sentence synopsis this story, make it catchy like on the back of a book: " + storyBody.replace("\n", ""),
      // prompt: "Respond with the number 1",
      max_tokens: 150,
      temperature: 0,
    });
    const storySummary = summaryResponse.data.choices[0].text.replace("\n","")
    console.log(summaryResponse.data.choices)
    console.log("\nSummary created!")

    console.log("\nGenerating title...")
    const titleResponse = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Please give this story a title: " + storyBody.replace("\n", ""),
      // prompt: "Respond with the number 1",
      max_tokens: 20,
      temperature: 0,
    });
    console.log(titleResponse.data.choices)
    const storyTitle = titleResponse.data.choices[0].text.replace("\n","");


    const imagePrompt = " | '4k, detailed, trending in artstation, fantasy, fantastical, bright, colorful, studio ghibli, fairytale'" 

    console.log("\nGenerating a cover photo...")
    const photoGeneraion = await openai.createImage({
      prompt: storySummary + imagePrompt,
      n: 1,
      size: "1024x1024"
    });
    console.log("\nCover photo created!")

    const story = {
      prompt: prompt,
      title: storyTitle,
      story: storyBody,
      summary: storySummary,
      dreamID: dreamID,
      coverPhoto: photoGeneraion.data.data[0].url
    };

    const newStory = new Story(story);
    await newStory.save();
    console.log("\nStory creation finished!")
    console.log("Story ID: " + newStory._id)
    
    await Dream.updateOne({ _id: dreamID}, { storyID: newStory._id })

    return res.status(200).json({ story: newStory })
    // res.redirect(`/story/${newStory._id}`);
  } catch (error) {
    console.log(error);
  }
};
