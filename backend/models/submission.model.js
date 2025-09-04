const mongoose = require("mongoose");

const testResultSchema = new mongoose.Schema({
  testCaseNumber: { type: Number, required: true },
  input: { type: Object, required: true },
  expected: { type: mongoose.Mixed, required: true },
  output: { type: mongoose.Mixed },
  pass: { type: Boolean, required: true },
  error: { type: String },
});

const submissionSchema = new mongoose.Schema(
  {
    user: { type: Object, required: true },
    problem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Problem",
      required: true,
    },
    code: { type: String, required: true },
    language: { type: String, required: true }, // e.g., "javascript", "python"
    status: {
      type: String,
      enum: ["Pending", "Success", "Error"],
      default: "Pending",
    },
    testResults: { type: [testResultSchema], default: [] },
    compileOutput: { type: String }, // optional: output from compiler
    runtimeError: { type: String }, // optional: runtime error messages
    executionTime: { type: Number }, // in milliseconds
  },
  { timestamps: true } // adds createdAt and updatedAt
);

const Submission = mongoose.model("Submission", submissionSchema);
module.exports = Submission;
