import mongoose, { Schema } from "mongoose";

export const Dream = mongoose.model(
  "Dream",
  new Schema({
    prompt: { type: String, required: true },
    response: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: false},
    storyID: { type: Schema.Types.ObjectId, ref: "Story", required: false},
    date: { type: Date, default: new Date()}
  })
);