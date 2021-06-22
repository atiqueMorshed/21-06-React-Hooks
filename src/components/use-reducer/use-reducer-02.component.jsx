import React, { useState, useReducer } from "react";

const initialState = {
  counter: 0,
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        counter: state.counter + 1,
        todos: [
          ...state.todos,
          { id: state.counter, task: action.payload, finished: false },
        ],
      };
    case "TOGGLE_TODO":
      return {
        counter: state.counter,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, finished: !todo.finished }
            : todo
        ),
      };
    default:
      return state;
  }
};

const UReducer02 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useState("");
  console.log(state);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD_TODO", payload: value });
          setValue("");
        }}
      >
        <input
          name="todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Add</button>
      </form>
      {state.todos.map((todo) => (
        <div
          key={todo.id}
          onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
          style={{
            textDecoration: todo.finished ? "line-through" : "",
            cursor: "pointer",
            width: "fit-content",
          }}
        >
          {todo.task}
        </div>
      ))}
    </div>
  );
};

export default UReducer02;
