import React from "react";
import Avatar from "react-avatar";

export default function Client({ username }) {
  return (
    <div className="flex flex-col gap-1">
      <Avatar size={50} round={"14px"} name={username} />
      <span className="text-[12px] text-zinc-300">{username}</span>
    </div>
  );
}
