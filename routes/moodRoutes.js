import express from "express";
const router = express.Router();
import {
  createMoodEntry,
  deleteMoodEntry,
  getAllMoodEntries,
  getMoodEntry,
  updateMoodEntry,
} from "../controllers/moodControllers";
import { authGuard } from "../middleware/authMiddleware";

router.route("/").post(authGuard, createMoodEntry).get(getAllMoodEntries);
router
  .route("/:id")
  .put(authGuard, updateMoodEntry)
  .delete(authGuard, deleteMoodEntry);
router.get("/:userId", getMoodEntry);

export default router;
