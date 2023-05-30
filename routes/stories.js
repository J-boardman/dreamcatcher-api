import { Router } from "express";
import { addStory, deleteStory } from "../controllers/stories.js";

const router = Router()

router.route("/").post(addStory)

router.route("/delete/:id").delete(deleteStory)

export default router