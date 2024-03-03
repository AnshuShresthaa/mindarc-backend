import express from "express";
const router = express.Router();
import {
  createComment, 
  deleteComment, 
  updateComment,
} from "../controllers/commentControllers";
import { authGuard } from "../middleware/authMiddleware";

router.post('/', authGuard, createComment);
router.put('/:commentId', authGuard, updateComment);
router.delete('/:commentId', authGuard, deleteComment);


export default router;