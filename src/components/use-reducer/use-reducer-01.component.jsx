import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: initialState.count + 1,
      };
    case "DECREMENT":
      return {
        count: initialState.count - 1,
      };
    default:
      return {
        count: initialState.count,
      };
  }
};

const UReducer01 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default UReducer01;
