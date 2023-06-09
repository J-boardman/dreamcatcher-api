"use server"

import { db } from "@/db/database"
import { wait } from "../actions"
import { openai } from "../openai"
import { dreams } from "@/db/schema"
import { eq } from "drizzle-orm"

// (C)reate
export async function interpretDream(prompt: string){
  const dream = await db.insert(dreams).values({
    authorId: 1,
    prompt: "My house was on fire and I was running for my life.",
    interpretation:"Dreams about a house on fire often symbolize a sense of loss, chaos, or emotional turmoil in one's life. Running for your life indicates a strong desire to escape or overcome a challenging situation or overwhelming emotions. The fire represents a powerful force that threatens to consume and destroy what is familiar and secure. This dream may reflect a need for change, a fear of losing control, or a sense of urgency to address and resolve difficult circumstances."
  })
  const response = await openai.createCompletion({ 
        model: "text-davinci-003",
        prompt: `I want you to act as a dream interpreter. I will give you descriptions of my dreams, and you will provide short interpretations based on the symbols and themes present in the dream. Prompt: ${prompt}`,
        // prompt: "Respond with the number 1",
        max_tokens: 256,
        temperature: 0,
  })
  return response.data.choices[0].text?.trim()
}

// (R)ead
export async function getDream(id: string) {
  const allDreams = await db.select().from(dreams)
  console.log(allDreams)
  await wait(3000)
  return {
    title: "Phoenix's Flight: A Tale of Courage and Hope",
    body: `Once upon a time, in a small village nestled amidst rolling hills, there lived a young child named Phoenix. Their days were filled with laughter, love, and the comforting embrace of a cozy home. However, one fateful night, as the stars sparkled in the sky, disaster struck. Phoenix's house was consumed by a raging fire, flickering flames dancing ominously against the midnight darkness.

    With their heart pounding and adrenaline coursing through their veins, Phoenix fled from the burning house, tears streaming down their face. As they sprinted through the village, the warm glow of the flames lighting their path, something extraordinary happened. A mysterious gust of wind swirled around them, lifting Phoenix gently into the air. They were flying.
    
    Up above the rooftops and over the trees, Phoenix soared with newfound wings—a gift bestowed upon them by the mystical spirits of the village. The spirits revealed themselves, ethereal beings with radiant wings of their own. They guided Phoenix through the night, their whispers of encouragement resonating in the air.
    
    Through moonlit meadows and enchanted forests, Phoenix's flight led them to encounters with magical creatures. They befriended a wise old owl who shared ancient wisdom, teaching them the value of resilience and the power of hope. A mischievous fox offered companionship and taught them the importance of adaptability and cleverness.
    
    As dawn broke, casting a soft glow upon the horizon, Phoenix's flight came to a gentle descent. They landed in a hidden valley, a place known as the Haven of Hope. Nestled within the valley were others who had also risen from the ashes—people who had experienced loss but had found strength to rebuild their lives.
    
    In this haven, Phoenix discovered a community filled with kindness and compassion. Together, they nurtured new beginnings, helping one another rebuild not just houses, but dreams and aspirations. Each person brought a unique gift—artists, musicians, storytellers—who shared their talents and inspired others.
    
    As time passed, Phoenix realized that their flight had been more than a means of escape—it had been a transformative journey of self-discovery. They had learned that courage and hope were not extinguished by adversity but were ignited, like a flame within their heart. They became a beacon of light and resilience, a symbol of triumph over adversity for their village and beyond.
    
    "The Phoenix's Flight: A Tale of Courage and Hope" became a bedtime story passed down through generations—a reminder that even in the darkest moments, there is always a glimmer of hope. It taught children that when faced with challenges, they can rise, spread their wings, and discover their inner strength. And so, as the moon graced the sky, children nestled in their beds, their dreams alight with the enchanting tale of Phoenix's flight—a testament to the resilience of the human spirit and the transformative power of hope.`,
    image: "/story-cover.jpg"
  }
}

export async function getDreams() {

}

export async function getUserDreams(user_id: number){
  await wait(800)
  const userDreams: Dream[] = [{
    id: 1,
    author_id: 1,
    prompt: "My house was on fire and I was running for my life.",
    interpretation: "Dreams about a house on fire often symbolize a sense of loss, chaos, or emotional turmoil in one's life. Running for your life indicates a strong desire to escape or overcome a challenging situation or overwhelming emotions. The fire represents a powerful force that threatens to consume and destroy what is familiar and secure. This dream may reflect a need for change, a fear of losing control, or a sense of urgency to address and resolve difficult circumstances."
  }]
  // const userDreams = await db.select().from(dreams).where(eq(dreams.authorId, user_id))
  console.log(userDreams)
  return userDreams
}


// (U)pdate


// (D)elete


export async function deleteDream() { }