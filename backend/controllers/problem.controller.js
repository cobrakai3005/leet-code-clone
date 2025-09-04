const Problem = require("../models/problem.model");

const findProblems = async (req, res) => {
  try {
    const problems = await Problem.find();
    return res.status(200).json({ success: true, problems });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const findProblemsBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const findProblem = await Problem.findOne({ slug });
    return res.status(200).json(findProblem);
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Cannot Get Problem" });
  }
};

module.exports = { findProblems, findProblemsBySlug };
