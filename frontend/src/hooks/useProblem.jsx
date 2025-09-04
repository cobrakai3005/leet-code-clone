import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function useProblem() {
  const [problemDescription, setProblemDescription] = useState();
  const { problem } = useParams();
  const [load, setLoad] = useState(false);

  const fetchProblem = async () => {
    setLoad(true);
    await new Promise((res, rej) => setTimeout(res, 1200));
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/problems/${problem}`
      );
      const data = await res.json();
      setProblemDescription(data);
    } catch (error) {
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    fetchProblem();
  }, []);
  return { problemDescription, load };
}
