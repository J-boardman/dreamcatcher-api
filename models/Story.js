import mongoose, { Schema } from "mongoose";

export const Story = mongoose.model(
  "Story",
  new Schema({
    prompt: { type: String, required: true },
    title: { type: String, required: true },
    story: { type: String, required: true },
    summary: { type: String, required: true },
    dreamID: { type: Schema.Types.ObjectId, ref: "Dream" },
    coverPhoto: { type: String },
  })
);
