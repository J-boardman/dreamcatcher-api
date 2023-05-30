import { Router } from "express";
import { addDream, deleteDream } from "../controllers/dreams.js";

const router = Router()

router.route("/").post(addDream)

router.route("/:id").delete(deleteDream)

export default router