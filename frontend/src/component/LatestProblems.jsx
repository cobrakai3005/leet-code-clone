import React from "react";
import useFetchProblems from "../hooks/useFetchProblems";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function LatestProblems() {
  const { load, problems } = useFetchProblems();
  return (
    <div>
      <Card>
        <h2 className="text-xl mb-10 text-violet-500  font-medium">
          Some Latest Problems
        </h2>
        <div className="flex flex-col gap-3">
          {load &&
            new Array(5)
              .fill(10)
              .map((el, i) => (
                <div key={i} className="w-full  h-16 border-[1px] animate-pulse border-zinc-100/20  rounded-lg  bg-gradient-to-bl from-violet-700   to-zinc-900"></div>
              ))}
          {!load &&
            problems.map((el, i) => (
              <Problem key={el._id} problem={el} sr={i} />
            ))}
        </div>
      </Card>
    </div>
  );
}

function Problem({ problem, sr }) {
  return (
    <div className="w-full  h-16 border-[1px] border-zinc-100/5 shadow-sm hover:shadow-white  rounded-lg   flex flex-col justify-center  items-start gap-3 ">
      <div className="">
        <span className="p-6">{sr + 1}</span>
        <Link
          className="text-zinc-300 font-semibold"
          to={`/problems/${problem.slug}`}
          state={{ problem }}
        >
          {problem.title}
        </Link>
      </div>
    </div>
  );
}
