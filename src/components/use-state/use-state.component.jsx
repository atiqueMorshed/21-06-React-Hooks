import React from "react";

import UState01 from "./use-state-01.component";
import UState02 from "./use-state-02.component";
import UState03 from "./use-state-03-form.component";

const UseStateCombined = () => {
  return (
    <div className="App">
      <h1>useState01: </h1>
      <UState01 />
      <h1>useState02: </h1>
      <UState02 />
      <h1>useState03: Form Custom Hook </h1>
      <UState03 />
    </div>
  );
};

export default UseStateCombined;
