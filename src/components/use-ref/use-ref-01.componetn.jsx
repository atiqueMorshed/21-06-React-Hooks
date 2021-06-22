import React, { useRef } from "react";

const URef01 = () => {
  const inputRef = useRef();
  // we can store anything in useRef, even functions
  // const aFunc = useRef(() => console.log("Hello"))
  // and then, we can call it anywhere using hello.current()

  return (
    <div>
      <input ref={inputRef} name="name" type="name" placeholder="Name" />
      <br />

      <button
        onClick={() => {
          console.log(inputRef.current);
          inputRef.current.focus();
        }}
      >
        Focus on field
      </button>
    </div>
  );
};

export default URef01;
