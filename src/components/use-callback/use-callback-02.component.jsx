import React, { useState, useCallback } from "react";

import Hello2 from "./hello-02.component";

const UCallback2 = () => {
  const [count, setCount] = useState(0);

  const numbers = [1, 10, 20];

  const increment = useCallback(
    (n) => {
      setCount((c) => c + n);
    },
    [setCount]
  );

  return (
    <div>
      <p>{count}</p>
      {numbers.map((n) => (
        <Hello2 increment={increment} n={n} key={n} />
      ))}
    </div>
  );
};

export default UCallback2;
