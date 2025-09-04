import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { useState, useEffect } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { toast } from "react-hot-toast";
import { CheckCheck } from "lucide-react";

export default function Editor({ starterCode, problem }) {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState([]);
  const [submitOutput, setSubmitOutput] = useState(null);
  const [loading, setLoading] = useState(false);
  const user = useKindeAuth();

  useEffect(() => {
    if (starterCode?.javascript) setCode(starterCode.javascript);
  }, [starterCode]);

  const runCode = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3000/run/${problem?._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await res.json();


      if (data?.success) {
        const raw = data?.stdout || "";
        try {
          const parsed = raw
            .split("\n")
            .filter(Boolean)
            .map((line) => JSON.parse(line));
          setOutput(parsed);
        } catch (err) {
          setOutput([{ pass: false, error: "Failed to parse output", raw }]);
        }
      } else {
        setOutput([
          { pass: false, error: "Code execution failed", raw: data?.stdout },
        ]);
      }
    } catch (err) {
      console.log(err);
      setOutput([{ pass: false, error: err.message }]);
    } finally {
      setLoading(false);
    }
  };

  const submitCode = async () => {
    setSubmitOutput([]);
    try {
      const res = await fetch(
        `http://localhost:3000/submissions/${problem._id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code, user }),
        }
      );
      const data = await res.json();

      if (data.success) {
        setSubmitOutput(data.testResults);

        toast.success("Code Submited");
        setCode(problem.starterCode.javascript);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 bg-gradient-to-t from-violet-900   to-zinc-900 text-white">
      <h1 className="text-2xl font-bold mb-2">{problem?.title}</h1>
      <CodeMirror
        value={code}
        className="text-[17px]"
        height="300px"
        theme={oneDark}
        extensions={[javascript()]}
        onChange={(value) => setCode(value)}
      />
      <button
        className="mt-2 p-2 bg-zinc-600 rounded mx-6 hover:bg-zinc-800"
        onClick={runCode}
      >
        {loading ? "Running..." : "Run Code"}
      </button>
      <button
        className="mt-2 p-2 bg-green-600 rounded hover:bg-green-500"
        onClick={submitCode}
      >
        {"Submit Code"}
      </button>
      {submitOutput?.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Submission Results</h2>
          {submitOutput.map((res, i) => (
            <div
              key={i}
              className={`p-3 mt-2 rounded border ${
                res.pass
                  ? "bg-green-900 border-green-500"
                  : "bg-red-900 border-red-500"
              }`}
            >
              <p className="font-semibold">
                Test Case {res.testCaseNumber || "-"} –{" "}
                {res.pass ? "✅ Passed" : "❌ Failed"}
              </p>
              {res.input && (
                <p className="text-sm text-gray-300">
                  Input: {JSON.stringify(res.input)}
                </p>
              )}
              {res.output !== undefined && (
                <p className="text-sm text-gray-300">
                  Output: {JSON.stringify(res.output)}
                </p>
              )}
              {res.expected !== undefined && (
                <p className="text-sm text-gray-300">
                  Expected: {JSON.stringify(res.expected)}
                </p>
              )}
              {res.error && (
                <p className="text-sm text-red-400">Error: {res.error}</p>
              )}
            </div>
          ))}
        </div>
      )}
      <div className="mt-4">
        {output.map((res, i) => (
          <div
            key={i}
            className={`p-3 mt-2 rounded border ${
              res.pass
                ? "bg-green-900 border-green-500"
                : "bg-red-900 border-red-500"
            }`}
          >
            <p className="font-semibold">
              Test Case {res.testCase || "-"} –{" "}
              {res.pass ? "✅ Passed" : "❌ Failed"}
            </p>
            {res.input && (
              <p className="text-sm text-gray-300">
                Input: {JSON.stringify(res.input)}
              </p>
            )}
            {res.output !== undefined && (
              <p className="text-sm text-gray-300">
                Output: {JSON.stringify(res.output)}
              </p>
            )}
            {res.expected !== undefined && (
              <p className="text-sm text-gray-300">
                Expected: {JSON.stringify(res.expected)}
              </p>
            )}
            {res.error && (
              <p className="text-sm text-red-400">Error: {res.error}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
