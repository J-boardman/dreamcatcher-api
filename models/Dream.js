import mongoose, { Schema } from "mongoose";

export const Dream = mongoose.model(
  "Dream",
  new Schema({
    prompt: { type: String, required: true },
    response: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User"},
    date: { type: Date, default: new Date()}
  })
);