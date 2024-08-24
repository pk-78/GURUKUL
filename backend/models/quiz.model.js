import mongoose from "mongoose";

import mongoose from "mongoose";

const quizSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    module: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
    },
    questions: {
      type: [mongoose.Schema.Types.Mixed],
      required: true,
    },
    attemptedBy: [
      {
        type: String,
        unique: true,
      },
    ],
  },
  { timestamp: true }
);

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
