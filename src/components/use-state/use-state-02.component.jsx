import React, { useState } from "react";

const UState01 = () => {
  const [{ count1, count2 }, setCount] = useState({
    count1: 10,
    count2: 20,
  });
  return (
    <div className="App">
      <button
        onClick={() =>
          setCount((currentState) => ({
            ...currentState,
            count1: currentState.count1 + 1,
          }))
        }
      >
        Increment Count1
      </button>
      <p>{count1}</p>

      <button
        onClick={() =>
          setCount((currentState) => ({
            ...currentState,
            count2: currentState.count2 + 1,
          }))
        }
      >
        Increment Count2
      </button>
      <p>{count2}</p>
    </div>
  );
};

export default UState01;
