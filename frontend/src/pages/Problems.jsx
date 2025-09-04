import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../component/Card";
import { Link } from "react-router-dom";
import useFetchProblems from "../hooks/useFetchProblems";

export default function Problems() {
  const { problems, load } = useFetchProblems();
  return (
    <div className="grid  grid-cols-[1fr_250px] gap-2 mt-14 rounded-4xl">
      <Card>
        <h2 className="text-xl mb-10 text-violet-500  font-medium">
          All Problems
        </h2>
        <div className="flex flex-col gap-3">
          {load &&
            new Array(5)
              .fill(10)
              .map((el) => (
                <div className="w-full  h-25 border-[1px] animate-pulse border-zinc-100/20  rounded-lg  bg-gradient-to-bl from-violet-700   to-zinc-900"></div>
              ))}
          {!load &&
            problems.map((el, i) => (
              <Problem key={el._id} sr={i} problem={el} />
            ))}
        </div>
      </Card>
      <Card>
        <h2 className="text-xl mb-3 text-violet-500  text-center font-normal tracking-wider">
          Progress
        </h2>
        <p className="text-sm text-zinc-500">
          Quit Thinking and start Solving{" "}
        </p>
      </Card>
    </div>
  );
}

function Problem({ problem, sr }) {
  return (
    <div className="w-full  h-25 border-[1px] border-zinc-100/20  rounded-lg  hover:bg-gradient-to-bl from-violet-700   to-zinc-900 flex flex-col justify-center  items-start gap-3 ">
      <div>
        <Link
          className="text-zinc-300 font-semibold"
          to={`/problems/${problem.slug}`}
          state={{ problem }}
        >
          <span className="mx-5">{sr + 1}</span> {problem.title}
        </Link>
      </div>
      <div className="flex gap-4 text-white  px-10">
        {problem?.tags.map((el, i) => (
          <span key={i} className="px-3 py-1 bg-violet-500/80 rounded-md">
            {el}
          </span>
        ))}
      </div>
    </div>
  );
}
