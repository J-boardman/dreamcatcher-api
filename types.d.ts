type Story = {
  title: string
  body: string
  image: string
}


type Dream = {
  id: string
  author_id: string
  prompt: string
  interpretation: string
}


type Story = {
  id: string
  author_id: string
  title: string
  blurb: string
  body: string
  cover_photo_url: string
  date_created: Date
  dream_id: string
}


type Story_Likes = {
  story_id: string
  user_id: string
  date_liked: Date
}


type Story_Comments = {
  comment_id: string
  author_id: string
  story_id: string
  comment_text: string
  date_commented: Date
}


type Shared_Stories = {
  story_id: string
  date_shared: Date
}

type User_Followings = {
  user_id: string
  follower_user_id: string
}



