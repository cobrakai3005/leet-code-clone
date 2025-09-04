const Problem = require("../models/problem.model");
const Submission = require("../models/submission.model"); // optional if saving

const submission = async (req, res) => {
  const { code, user, language = "javascript" } = req.body;


  if (!user)
    return res
      .status(500)
      .json({ success: false, error: "Please Login First" });
  const { id } = req.params;

  // 1. Fetch problem
  const problem = await Problem.findById(id);
  if (!problem)
    return res
      .status(404)
      .json({ success: false, message: "Problem not found" });

  const fnName = problem.functionName;
  let codeToRun = code + "\n\n";

  problem.testCases.forEach((tc, idx) => {
    const args = JSON.stringify(Object.values(tc.input));

    codeToRun += `
  try {
    const result = ${fnName}(...${args});
    const pass = JSON.stringify(result) === JSON.stringify(${JSON.stringify(
      tc.output
    )});
    console.log(JSON.stringify({
          testCaseNumber: ${idx + 1},
          input: ${JSON.stringify(tc.input)},
          output: result,
          expected: ${JSON.stringify(tc.output)},
          pass: pass
        }));
  } catch (err) {
    console.log(JSON.stringify({
      testCase: ${idx + 1},
      error: err.message
    }));
  }
  `;
  });

  try {
    const response = await fetch(
      "https://ce.judge0.com/submissions?base64_encoded=false&wait=true",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source_code: codeToRun, language_id: 63 }),
      }
    );

    const data = await response.json();

    // 4. Parse stdout
    const raw = data.stdout || "";
    let testResults = [];
    try {
      testResults = raw
        .split("\n")
        .filter(Boolean)
        .map((line) => JSON.parse(line));
    } catch {
      testResults = [{ pass: false, error: "Failed to parse output", raw }];
    }

    // 5. Optionally save submission

    await Submission.create({
      user: user.user,
      problem: problem._id,
      code,
      language,
      status: data.stderr || data.compile_output ? "Error" : "Success",
      testResults,
      compileOutput: data.compile_output,
      runtimeError: data.stderr,
      executionTime: data.time ? parseFloat(data.time) * 1000 : null, // convert sec → ms
    });

    // 6. Return results
    return res.json({ success: true, testResults });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, error: err.message });
  }
};

const allSubmissions = async (req, res) => {
  const { userId } = req.params;
  const submissions = await Submission.find({ "user.id": userId })
    .sort({
      createdAt: -1,
    })
    .populate("problem");

  return res
    .status(200)
    .json({ success: true, submissions, message: "All Submission route" });
};
module.exports = { submission, allSubmissions };
