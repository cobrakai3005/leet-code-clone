const mongoose = require("mongoose");

// Schema for examples shown to users
const exampleSchema = new mongoose.Schema({
  input: { type: Object, required: true },
  output: { type: mongoose.Mixed, required: true },
  explanation: { type: String },
});

// Schema for hidden test cases
const testCaseSchema = new mongoose.Schema({
  input: { type: Object, required: true },
  output: { type: mongoose.Mixed, required: true },
});

// Main problem schema
const problemSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    required: true,
  },
  functionName: String,
  constraints: { type: [String], default: [] },
  tags: { type: [String], default: [] },
  examples: { type: [exampleSchema], default: [] },
  starterCode: { type: Map, of: String },
  testCases: { type: [testCaseSchema], default: [] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Problem = mongoose.model("Problem", problemSchema);

module.exports = Problem;
