import React, { useEffect, useState } from "react";
import useFetch from "./custom-hooks/use-fetch.component";
const UEffect02 = () => {
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count") || 0)
  );

  // Custom useEffect hook for fetching
  const state = useFetch(`http://numbersapi.com/${count}/trivia`);

  //useEffect to save data to local Storage
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <br />
      {state.loading ? <h1>Loading State</h1> : <p>{state.data}</p>}
    </div>
  );
};

export default UEffect02;
