import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Database Connection
connectDB();

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
// app.use("/api/session", sessionRoutes);
// app.use("/api/question", questionRoutes);

// app.use("/api/generate-questions", protect, generateQuestions);
// app.use("/api/generate-explanation", protect, generateExplanation);

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use("/upload", express.static(path.join(__dirname, "uploads"), {}));

// Server Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
