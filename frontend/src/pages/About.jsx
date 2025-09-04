import React from "react";

export default function About() {
  return (
    <div className="p-6 grid grid-cols-[1fr_250px]">
      <div className="pr-10">
        <h2 className="text-3xl">About Us</h2>
        <div className="text-lg font-mono max-w-5xl text-justify leading-[33px] mt-4 text-zinc-300">
          Welcome to CodeArena – your ultimate platform to practice, learn, and
          master coding challenges! At CodeArena, we believe that programming is
          best learned by doing. Our mission is to provide a seamless
          environment where developers of all levels can: Solve real-world
          algorithm and data structure problems Compete in challenges to improve
          problem-solving skills Track progress and performance through
          leaderboards Learn from community solutions and discussion Whether you
          are preparing for coding interviews, enhancing your skills, or just
          love solving puzzles, CodeArena provides a curated set of problems
          ranging from easy to expert level.
          <p>
            The design of CodeArena is clean and card-based, with a focus on
            user-interaction above everything else. It has been developed by
            Himanshu Dhammeriya.
          </p>
        </div>
      </div>
      <img src="/daily.jpg" alt="" />
    </div>
  );
}
