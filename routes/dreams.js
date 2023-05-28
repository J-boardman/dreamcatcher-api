import { Router } from "express";
import { addDream } from "../controllers/dreams.js";

const router = Router()

router.route("/")
  .post(addDream)

export default router