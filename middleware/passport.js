import passport from "passport";
import bcrypt from "bcryptjs"
import { User } from "../models/User.js";
import pkg from "passport-local";
const LocalStrategy = pkg.Strategy;

const configurePassport = async(req, res, next) => {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await User.findOne({ username: username });
        if (!user) return done(null, false, { message: "Incorrect username" });
  
        bcrypt.compare(password, user.password, (err, res) => {
          if (res) return done(null, user);
          return done(null, false, { message: "Incorrect password" });
        });
      } catch (error) {
        return done(error);
      }
    })
  );
  
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });

  passport.initialize()
  passport.session()

  next()
}

export default configurePassport