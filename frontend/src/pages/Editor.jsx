import React, { useState } from "react";
import Client from "../component/Client";
import Editor from "../component/Editor";

export default function EditorPage() {
  const [clients, setClients] = useState([
    { socketId: 1, username: "Rakesh K" },
    { socketId: 2, username: "John K" },
  ]);
//#1c1e29
  return (
    <div className="min-h-screen grid grid-cols-[270px_1fr] text-white  bg-gradient-to-bl from-violet-700   to-zinc-900">
      <div className="py-3 px-2 flex flex-col justify-center">
        {/* Logo */}
        <div className="logo border-b-[1px] border-zinc-300/20 p-4">
          <h3 className="text-2xl  font-bold">Coding ...</h3>
        </div>

        <h3>Connected People</h3>
        <div className="flex items-center gap-3 p-4">
          {clients.map((el, i) => (
            <Client key={i} username={el.username} />
          ))}
        </div>

        <button className="px-4 mt-auto py-2 block m-1 bg-emerald-600 hover:bg-emerald-300 text-white text-sm font-mono rounded-md">
          Copy Room ID
        </button>
        <button className="px-4 py-2 block m-2 bg-pink-800 hover:bg-pink-500  text-white text-sm font-mono rounded-md">
          Leave
        </button>
      </div>
      <div className="">
        <Editor />
      </div>
    </div>
  );
}
