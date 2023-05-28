import { User } from "../models/User.js";
import bcrypt from "bcryptjs"

export const register = async (req, res, next) => {
  try {
    const hashedPwd = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      password: hashedPwd,
    });
    await user.save();
    res.redirect("/dream");
  } catch (error) {
    console.log(error)
  }
}

export const logOut = (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect("/");
  });
};