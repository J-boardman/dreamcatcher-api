import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import session from "express-session";
import passport from "passport";
import configurePassport from "./middleware/passport.js"

import * as dotenv from "dotenv";
dotenv.config();
import db_conn from "./config/db_conn.js";

import { logOut, register } from "./controllers/auth.js";
// Route imports 
import users from "./routes/users.js"
import dreams from "./routes/dreams.js"
import stories from "./routes/stories.js"
import { getDreamById } from "./controllers/dreams.js";
import { Dream } from "./models/Dream.js";
import { Story } from "./models/Story.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

db_conn()

const app = express();
app.use(express.static(path.join(__dirname, "src")))

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(configurePassport)

// Session
app.use(session({ secret: "dreams", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

// Single Routes
app.get("/", (req, res) => res.render("index"));
app.get("/new-dream", (req, res) => res.render("new-dream"))
app.post("/register", register);
app.get("/log-out", logOut)

app.post("/log-in", passport.authenticate("local", {
  successRedirect: "/new-dream",
  failureRedirect: "/",
}));

app.get("/dream/:id", async(req, res) => {
  console.log(req.params.id)
  const dream = await Dream.findById(req.params.id)
  res.render("past-dream", { dream })
})

app.get("/dreams/:userID", async(req, res) => {
  try {
    const dreams = await Dream.find({ author: req.params.userID }).sort({ date: -1 })
    res.render("user-dreams", { dreams })
  } catch (error) {
    console.log(error)    
  }
})

app.get("/story/:id", async(req, res) => {
  try {
    const story = await Story.findById(req.params.id)
    res.render("story", { story })
  } catch (error) {
    console.log(error)
  }
})
  

// Routers
app.use("/users", users)
app.use("/dreams", dreams)
app.use("/stories", stories)

app.listen("3500", () => console.log("App running on http://localhost:3500"));
