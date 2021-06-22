import React, { useState, useMemo } from "react";
import useFetch from "./use-fetch-01.component";

function computeLongestWord(arr) {
  if (!arr) {
    return null;
  }

  console.log("Computing longest word: ");

  let longestWord = "";

  arr.forEach((sentence) =>
    sentence.split(" ").forEach((word) => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    })
  );

  return longestWord;
}

const UMemo01 = () => {
  const [count, setCount] = useState(0);
  const { data, error, loading } = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
  );

  const longestWord = useMemo(() => computeLongestWord(data), [data]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error fetching!</p>;
  }

  if (longestWord) {
    return (
      <div>
        <div>count: {count}</div>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <div>{longestWord}</div>
      </div>
    );
  }
};

export default UMemo01;
