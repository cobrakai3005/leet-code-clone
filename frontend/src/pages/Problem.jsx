import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Editor from "../component/Editor";
import { Fingerprint } from "lucide-react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import useProblem from "../hooks/useProblem";

export default function Problem() {
  const { load, problemDescription } = useProblem();
  const { user } = useKindeAuth();
  return (
    <div className="min-h-screen grid grid-cols-[1fr_1fr]">
      <div className="p-4 space-y-5 border-r-[1px] border-white/20">
        {load ? (
          <h3 className="p-5 bg-zinc-800 animate-pulse duration-150 rounded-md"></h3>
        ) : (
          <h3 className="text-4xl">
            <pre>{problemDescription?.title}</pre>
          </h3>
        )}
        {load ? (
          <span className="px-4 py-1 block bg-violet-950 animate-pulse duration-150 rounded-md"></span>
        ) : (
          <span className="text-md px-4 block w-fit py-1 my-3 rounded-xl font-medium bg-violet-950">
            {problemDescription?.difficulty}
          </span>
        )}

        {load ? (
          <h3 className="py-10 bg-zinc-800 animate-pulse duration-150 rounded-md"></h3>
        ) : (
          <p className="text-md">{problemDescription?.description}</p>
        )}

        <div className="border-r border-white/20">
          <h3 className="text-xl font-semibold mb-2">Sample Test Cases</h3>
          {load ? (
            <h3 className="py-28 bg-gradient-to-t from-violet-900   to-zinc-900 animate-pulse duration-150 rounded-md"></h3>
          ) : (
            <div className="space-y-3">
              {problemDescription?.testCases?.map((el, i) => (
                <div
                  key={i}
                  className="p-1 border-[1px] border-white/10 rounded bg-gradient-to-t from-violet-900   to-zinc-900"
                >
                  {/* Input */}
                  <p className="p-2 font-semibold">Input:</p>

                  <pre className="bg-gradient-to-b from-violet-900   to-zinc-900 p-2 rounded whitespace-pre-wrap">
                    {Object.entries(el.input).map(([key, value]) => (
                      <div key={key}>
                        {key} = {JSON.stringify(value)}
                      </div>
                    ))}
                  </pre>

                  {/* Expected Output */}
                  <pre className="bg-zinc-800 p-2 rounded">
                    {JSON.stringify(el.output)}
                  </pre>
                  <p className="p-2 font-semibold">Expected Output:</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="relative">
        <Editor
          problemDescription={problemDescription}
          starterCode={problemDescription?.starterCode}
          testCases={problemDescription?.testCases}
          problem={problemDescription}
        />

        {!user && (
          <div className="absolute top-0 left-0 w-full flex justify-center items-center h-[500px] bg-white/20 backdrop-blur-sm">
            <h3 className=" text-zinc-950 flex flex-col justify-center items-center  font-bold text-3xl">
              {" "}
              <Fingerprint size={77} />
              Please Login To Try This Problem
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
