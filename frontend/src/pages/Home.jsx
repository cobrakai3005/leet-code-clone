import { useState } from "react";
import { useEffect } from "react";

import Topbar from "../component/Topbar";
import Card from "../component/Card";
import LatestProblems from "../component/LatestProblems";
import Sidebar from "../component/Sidebar";
import Contributor from "../component/Contributor";

export default function Home() {
  return (
    <div className="w-full   mx-auto grid grid-cols-[250px_1fr_160px]">
      <Sidebar />

      <LatestProblems />

      <Contributor />
    </div>
  );
}
