import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import dreamRouter from "./routes/dreams.js"
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static("." + "/src"))


app.use("/dreams", dreamRouter)
app.use("/past_dreams", async(req, res) => res.sendFile("/src/past_dreams.html", { root: "."}))
app.use("/", async(req, res) => res.sendFile("index.html", { root: "."}))

app.listen(3500, () => console.log("App running on http://localhost:3500"))