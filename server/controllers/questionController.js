import Question from "../model/Question.js";
import Session from "../model/Session.js";

// POST api/questions/add
export const addQuestionsToSession = async (req, res) => {
  try {
    const { sessionId, questions } = req.body;

    if (!sessionId || !questions || !Array.isArray(questions)) {
      return res.status(400).json({ message: "Invalid user data." });
    }

    const session = await Session.findById(sessionId);
    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    const createdQuestions = await Question.insertMany(
      questions.map((q) => ({
        session: sessionId,
        question: q.question,
        answer: q.answer,
      }))
    );

    session.questions.push(...createdQuestions.map((q) => q._id));
    await session.save();

    return res.status(200).json(createdQuestions);
  } catch (error) {
    res.status(500).json({
      message: "Catched an Error on addQuestionsToSession: ",
      error: error.message,
    });
  }
};

// POST api/questions/:id/pin
export const togglePinQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);

    if (!question) {
      return res.status(404).json({ message: "No question found." });
    }

    question.isPinned = !question.isPinned;
    question.save();

    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({
      message: "Catched an Error on togglePinQuestion: ",
      error: error.message,
    });
  }
};

// POST api/questions/:id/note
export const updateQuestionNote = async (req, res) => {
  try {
    const { note } = req.body;
    const question = await Question.findById(req.params.id);

    if (!question) {
      return res.status(404).json({ message: "No question found." });
    }

    question.note = note || "";
    question.save();

    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({
      message: "Catched an Error on updatePinNote: ",
      error: error.message,
    });
  }
};
