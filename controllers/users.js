import { User } from "../models/User.js"

export const getUserByUsername = async(req, res) => {
  const foundUser = await User.findOne({ username: req.params.username})
  if(!foundUser) return res.status(200).json({message: "No users found"})
  res.status(409).json({username: foundUser.username})
}