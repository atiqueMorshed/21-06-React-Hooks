import React from "react";

const Hello2 = ({ n, increment }) => {
  return <button onClick={() => increment(n)}>{n}</button>;
};

export default React.memo(Hello2);
