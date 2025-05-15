import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    role: { type: String, requiired: true },
    experience: { type: String, requiired: true },
    topicsToFocus: { type: String, requiired: true },
    description: String,
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Session", sessionSchema);
