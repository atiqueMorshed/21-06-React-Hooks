import React, { useState } from "react";
import Hello from "./hello.component";

const URef02 = () => {
  // const renders = useRef(0);
  const [showHello, setShowHello] = useState(true);

  // console.log("hello renders: ", renders.current++);

  return (
    <div>
      <p>
        Clicking increment takes 3s to load. In the meantime, if we toggle the
        Hello component, that'd unmount the Hello and useFetch component. But
        after the rest of the 3s, fetch will still try to set state (which is at
        this point, unmounted) and cause error
      </p>
      <button onClick={() => setShowHello(!showHello)}>Toggle</button>
      {showHello && <Hello />}
    </div>
  );
};

export default URef02;
