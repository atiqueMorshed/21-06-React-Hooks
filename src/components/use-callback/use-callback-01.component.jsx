import React, { useState, useCallback } from "react";

import Hello from "./hello-01.component";

const UCallback1 = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(
    (n) => {
      setCount((c) => c + n);
    },
    [setCount]
  );

  return (
    <div>
      <Hello increment={increment} />
      <p>{count}</p>
    </div>
  );
};

export default UCallback1;
