import React, { useState } from "react";
import toast from "react-hot-toast";

export default function CodeSubmitted({ code }) {
  const [copied, setCopied] = useState("");
  return (
    <div>
      <pre className="relative">
        <button
          onClick={() => {
            window.navigator.clipboard.writeText(code).then(() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 1500); // reset after 1.5s
              toast.success("Copied Code");
            });
          }}
          className="absolute right-4 top-4 bg-zinc-900 rounded-md hover:bg-zinc-700 p-2"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <code className="language-javascript">{code}</code>
      </pre>
    </div>
  );
}




