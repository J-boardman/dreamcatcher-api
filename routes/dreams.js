import express from "express";
import { addDream, deleteDream, getAllDreams, getOneDream } from "../controllers/dreams.js";

const router = express.Router()

router.route("/")
  .get(getAllDreams)
  .post(addDream)

router.route("/:id")
  .get(getOneDream)
  .delete(deleteDream)

export default router