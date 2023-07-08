"use server"

import { openai } from "../openai"
import { imagePrompt, storyBlurbPrompt, storyPrompt, titlePrompt } from "../storyPrompts"

// (C)reate
export async function generateFullStory(initalPrompt: string) {
  try {
    console.log("Generating Title...")
    const title = await generatePartOfStory(titlePrompt, initalPrompt, 20, 0.2)
    if (!title) throw new Error("Generating story title failed.")

    console.log(`✅ Title generated. Generating blurb...`)
    const blurb = await generatePartOfStory(storyBlurbPrompt, title, 100, 0.4)
    if (!blurb) throw new Error("Generating story blurb failed.")

    console.log(`✅ Blurb generated. Generating story...`)
    const story = await generatePartOfStory(storyPrompt, blurb, 1024, 0.6)
    if (!story) throw new Error("Generating story failed.")

    console.log(`✅ Story generated. Generating image...`)
    const storyCoverImage = await generateStoryImage(blurb)
    if(!storyCoverImage) throw new Error("Generating story cover image failed.")
    
    
    console.log(`✅ Image generated. Saving story to database...`)
    return {title, blurb, story, storyCoverImage }

  } catch (error) {
    console.log(error)
  }
}

export async function generatePartOfStory(
  storyPartPrompt: string,
  prompt: string,
  max_tokens: number,
  temperature: number,
  model: string = "text-davinci-003"
) {
  const response = await openai.createCompletion({
    model,
    prompt: storyPartPrompt + `${prompt}`,
    max_tokens,
    temperature
  })

  return response.data.choices[0].text?.trim()
}

export async function saveStoryToDatabase(){

}


export async function generateStoryImage(prompt: string){
  const imageUrl = await openai.createImage({
    prompt: prompt + imagePrompt,
    n: 1,
    size: '1024x1024'
  })

  return imageUrl.data.data[0].url
}

// (R)ead

// (U)pdate

// (D)elete