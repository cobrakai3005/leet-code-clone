import React, { useEffect, useState } from "react";

export default function useFetchProblems() {
  const [problems, setProblems] = useState([]);
  const [load, setLoad] = useState(false);

  const fetchProblems = async () => {
    setLoad(true);
    await new Promise((res, rej) => setTimeout(res, 1200));
    try {
      const res = await fetch("http://localhost:3000/problems");
      const data = await res.json();
      if (data.success) {
        setProblems(data.problems);
      }
    } catch (error) {
    } finally {
      setLoad(false);
    }
  };
  useEffect(() => {
    fetchProblems();
  }, []);
  return { load, problems };
}
