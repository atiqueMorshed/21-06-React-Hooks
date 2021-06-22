import { useLayoutEffect, useRef, useState } from "react";

const ULEffect1 = () => {
  const inputRef = useRef();
  const [name, setName] = useState("");
  const [rect, setRect] = useState();

  useLayoutEffect(() => {
    setRect(inputRef.current.getBoundingClientRect());
    console.log(inputRef.current.getBoundingClientRect());
  }, []); // If the element that we are targeting changes size (like a dynamic paragraph), we can add that content of the paragraph (state) to the dependency;
  return (
    <div>
      <input
        name="name"
        ref={inputRef}
        type="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />

      <pre>{JSON.stringify(rect, null, 2)}</pre>
    </div>
  );
};

export default ULEffect1;
