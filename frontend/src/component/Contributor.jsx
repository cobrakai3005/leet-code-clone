import React from "react";

export default function Contributor() {
  return (
    <div className="w-full py-5">
      <h1 className="text-zinc-200 font-semibold text-lg p-2">
        Out Contributers
      </h1>
      <div className="flex flex-col gap-7">
        <div className="p-3 group bg-zinc-950 rounded hover:shadow-sm shadow-white">
          <h3 className="text-md text-white/40 group-hover:text-white">
            Amit Garwal
          </h3>
          <p className="text-sm text-white/30">amit@gmail.com</p>
        </div>
        <div className="p-3 bg-zinc-950 rounded hover:shadow-sm shadow-white">
          <h3 className="text-md text-white/40">Himanshu</h3>
          <p className="text-sm text-white/30">himan@Gmail.com</p>
        </div>
        <div className="p-3 bg-zinc-950 rounded hover:shadow-sm shadow-white">
          <h3 className="text-md text-white/40">CodeerArmy Challenge2.0</h3>
          <p className="text-sm text-white/30">Starting in 10 days</p>
        </div>
      </div>
    </div>
  );
}
