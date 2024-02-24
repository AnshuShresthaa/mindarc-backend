import express from "express";
const router = express.Router();
import {
  createComment,
} from "../controllers/commentControllers";
import { authGuard } from "../middleware/authMiddleware";

router
  .route("/")
  .post(authGuard, createComment);

export default router;