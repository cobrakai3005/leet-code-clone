import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full p-4 flex items-center justify-between">
      <Link to={"/"} className="text-4xl">
        {" "}
        Code Problems
      </Link>

      <Link to={"/"} className="text-xl">
        Problems
      </Link>

      <div className=" flex items-center gap-5">
        <Link to={"/"} className="text-xl">
          Login
        </Link>
        <Link to={"/"} className="text-xl">
          Logout
        </Link>
      </div>
    </div>
  );
}
