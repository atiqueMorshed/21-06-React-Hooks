import React, { useRef } from "react";

const Hello = ({ increment }) => {
  const renders = useRef(0);
  console.log("renders", renders.current++);
  return <button onClick={() => increment(5)}>Hello</button>;
};

export default React.memo(Hello);
