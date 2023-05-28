import { Router } from "express";
import { getUserByUsername } from "../controllers/users.js";

const router = Router()

router.route("/:username").get(getUserByUsername)

export default router