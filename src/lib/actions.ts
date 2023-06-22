"use server"

export async function generateStory(data: FormData){
  const generatingStory = data.get("include-story")?.length
  if(!generatingStory) {
    console.log("Story not requested.")
    return
  }
  await new Promise(resolve => setTimeout(resolve, 10000));
  console.log(data)
}

export async function getDream(id: string){
  return {
    title: "Phoenix's Flight: A Tale of Courage and Hope," ,
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