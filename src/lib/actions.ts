"use server"

export async function wait(time: number){
  await new Promise(resolve => setTimeout(resolve, time))
}

export async function getUser(id: number){
  await wait(1500)
  return {
    username: "Shawn09",
    firstName: "Shawn",
    lastName: "Munoz"
  }
}

export async function generateStory(data: FormData){
  const generatingStory = data.get("include-story")?.length
  if(!generatingStory) {
    console.log("Story not requested.")
    return
  }
  await wait(10000);
  console.log(data)
}
