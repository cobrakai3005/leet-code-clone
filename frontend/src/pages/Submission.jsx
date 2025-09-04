import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs";
import "prismjs/themes/prism.css"; // Choose a theme

import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/themes/prism-okaidia.css";
import CodeSubmitted from "./CodeSubmitted";

export default function Submission() {
  const { state } = useLocation();

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="p-2 space-y-3">
      <h4 className="text-4xl font-mono">
        Problem:{" "}
        <span className="font-bold">{state.submission.problem.title}</span>
      </h4>
      <h3 className="text-2xl text-zinc-300">Your Solution to for This</h3>
      <p className="text-md">
        Description: {state.submission.problem.description}
      </p>
      <p className="text-zinc-400 text-md">
        Submitted On{" "}
        {new Date(state.submission.createdAt).toLocaleDateString("en-GB")}{" "}
        {new Date(state.submission.createdAt).toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <CodeSubmitted code={state.submission.code} />
      <TestCases testcases={state.submission.testResults} />
    </div>
  );
}

function TestCases({ testcases }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Test Results</h2>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full border border-zinc-700">
          <thead className="bg-zinc-800 text-white">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Input</th>
              <th className="px-4 py-2 text-left">Expected</th>
              <th className="px-4 py-2 text-left">Output</th>
              <th className="px-4 py-2 text-left">Result</th>
            </tr>
          </thead>
          <tbody className="bg-zinc-900 text-zinc-200">
            {testcases.map((tc, idx) => (
              <tr key={tc._id || idx} className="border-t border-zinc-700">
                <td className="px-4 py-2">{tc.testCaseNumber}</td>
                <td className="px-4 py-2 font-mono text-sm">
                  {JSON.stringify(tc.input)}
                </td>
                <td className="px-4 py-2 font-mono text-sm">{tc.expected}</td>
                <td className="px-4 py-2 font-mono text-sm">{tc.output}</td>
                <td
                  className={`px-4 py-2 font-bold ${
                    tc.pass ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {tc.pass ? "Passed" : "Failed"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
