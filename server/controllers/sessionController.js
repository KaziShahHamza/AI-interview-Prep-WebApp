import Session from "../model/Session.js";
import Question from "../model/Question.js";

// GET /api/sessions/my-sessions
export const getMySessions = async (req, res) => {
  try {
    const sessions = await Session.find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .populate("questions");
    res.status(200).json(sessions);
  } catch (error) {
    console.log("My Session Catched Error");
    res.status(500).json({ message: "Server Error" });
  }
};

// GET /api/sessions/:id
export const getSessionById = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id)
      .populate({
        path: "questions",
        options: { sort: { isPinned: -1, createdAt: 1 } },
      })
      .exec();

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    // console.log("response sent from get session by id");

    res.status(200).json(session);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// POST /api/sessions/create
export const createSession = async (req, res) => {
  try {
    const { role, experience, topicsToFocus, description, questions } =
      req.body;
    const userId = req.user._id;

    const session = await Session.create({
      user: userId,
      role,
      experience,
      topicsToFocus,
      description,
    });

    const questionDocs = await Promise.all(
      questions.map(async (q) => {
        const question = await Question.create({
          session: session._id,
          question: q.question,
          answer: q.answer,
        });
        return question._id;
      })
    );

    session.questions = questionDocs;

    await session.save();

    res.status(200).json({ session });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

//DELETE /api/sessions/:id
export const deleteSession = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);

    if (!session) {
      return res.status(404).json({ message: "session not found" });
    }

    if (session.user.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ message: "Not authorized to delete this session" });
    }

    await Question.deleteMany({ session: session._id });
    await session.deleteOne();

    res.status(200).json({ message: "session deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
