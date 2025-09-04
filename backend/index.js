const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const colors = require("colors");
const connectDB = require("./Database/connectDB");
const problemRoutes = require("./routes/problem.route");
const submitissionRroutes = require("./routes/submission.route");
const Problem = require("./models/problem.model");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.text());

app.use("/problems", problemRoutes);
app.use("/submissions", submitissionRroutes);

app.post("/run/:id", async (req, res) => {
  const { id } = req.params;
  const { code } = req.body;

  if (!code)
    return res
      .status(400)
      .json({ success: false, message: "Code is required" });

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
      testCase: ${idx + 1},
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
    res.json({
      success: true,
      stdout: data.stdout,
      stderr: data.stderr,
      compile_output: data.compile_output,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(3000, async () => {
  connectDB();
  console.log("Sever is running on port 3000".cyan);
});
