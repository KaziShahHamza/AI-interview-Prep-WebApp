import express from "express";
import { addQuestionsToSession, togglePinQuestion, updateQuestionNote } from "../controllers/questionController.js";
import { protect } from "../middlewares/authMiddleware.js"

const router = express.Router();

// /api/questions/add
router.post("/add", protect, addQuestionsToSession);
// /api/questions/:id/pin
router.post("/:id/pin", protect, togglePinQuestion);
// /api/questions/:id/note
router.post("/:id/note", protect, updateQuestionNote);

export default router;