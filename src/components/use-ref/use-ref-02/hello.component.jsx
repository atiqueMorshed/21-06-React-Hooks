import React, { useState, useEffect } from "react";
import useFetch from "./use-fetch.component";

const Hello = () => {
  // const renders = useRef(0);
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  // console.log("hello renders: ", renders.current++);

  return (
    <div>
      <div>{loading ? <p>Loading...</p> : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
    </div>
  );
};

export default Hello;
