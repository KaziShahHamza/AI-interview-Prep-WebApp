import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
  getSessionById,
  getMySessions,
  createSession,
  deleteSession,
} from "../controllers/sessionController.js";

const router = express.Router();

// /api/sessions/my-sessions
router.get("/my-sessions", protect, getMySessions);
// /api/sessions/:id
router.get("/:id", protect, getSessionById);
// /api/sessions/create
router.post("/create", protect, createSession);
// /api/sessions/:id
router.delete("/:id", protect, deleteSession);

export default router;
