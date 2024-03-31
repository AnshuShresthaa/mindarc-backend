import express from "express";
const router = express.Router();
import {
  createJournalEntry,
  deleteJournalEntry,
  getAllJournalEntries,
  getJournalEntry,
  updateJournalEntry,
} from "../controllers/journalControllers";
import { authGuard } from "../middleware/authMiddleware";

router.route("/").post(authGuard, createJournalEntry).get(getAllJournalEntries);
router
  .route("/:id")
  .put(authGuard, updateJournalEntry)
  .delete(authGuard, deleteJournalEntry)
  .get(getJournalEntry);

export default router;
