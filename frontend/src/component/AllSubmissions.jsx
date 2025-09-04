import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllSubmissions() {
  const { user } = useKindeAuth();
  const [submissions, setSubmissions] = useState([]);
  const [load, setLoad] = useState(false);

  const fetchSubmissions = async () => {
    setLoad(true);
    await new Promise((res, rej) => setTimeout(res, 1200));
    try {
      const res = await fetch(`http://localhost:3000/submissions/${user.id}`);
      const data = await res.json();

      if (data.success == true) {
        setSubmissions(data?.submissions);
      }
    } catch (error) {
    } finally {
      setLoad(false);
    }
  };
  useEffect(() => {
    fetchSubmissions();
  }, []);

  return (
    <div>
      <h3 className="text-xl m-3">All Submissions</h3>
      {submissions.map((el, i) => (
        <div className="w-full  h-16 border-[1px] border-zinc-100/5 shadow-sm hover:shadow-white  rounded-lg  flex flex-col justify-center  items-start gap-3 ">
          <Link
            to={`/submission/${el.problem.slug}`}
            className="px-4 flex w-full items-center gap-2"
            state={{ submission: el }}
          >
            <span>{i + 1}.</span> {el?.problem.title}
            <span className="ml-auto block font-medium text-sm bg-green-950 text-emerald-100 px-4 py-1 rounded ">
              {el.status}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
}
