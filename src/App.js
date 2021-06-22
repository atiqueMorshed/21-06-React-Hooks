import React from "react";

import UseStateCombined from "./components/use-state/use-state.component";

import UEffect01 from "./components/use-effect/use-effect-01.component";
import UEffect02 from "./components/use-effect/use-effect-02-fetch.component";

import URef01 from "./components/use-ref/use-ref-01.componetn";
import URef02 from "./components/use-ref/use-ref-02/use-ref-02.component";

import ULEffect1 from "./components/use-layout-effect/use-layout-effect.component";

import UCallback1 from "./components/use-callback/use-callback-01.component";
import UCallback2 from "./components/use-callback/use-callback-02.component";

import UMemo01 from "./components/use-memo/use-memo-01.component";

import UReducer01 from "./components/use-reducer/use-reducer-01.component";
import UReducer02 from "./components/use-reducer/use-reducer-02.component";

import ContextProvicer01 from "./components/use-context/context-provider.component";

import "./App.css";

// REACT HOOKS DOC
// https://reactjs.org/docs/hooks-reference.html

const App = () => {
  return (
    <div className="App">
      {
        // <h1> useStates </h1>
        // <UseStateCombined />
        // <h1> useEffect 1 </h1>
        // <UEffect01 />
        // <h1> useEffect 2 </h1>
        // <UEffect02 />
        // <h1> useRef 1 </h1>
        // <URef01 />
        // <h1> useRef 2 </h1>
        // <URef02 />
        // <h1>useLayoutEffect 1</h1>
        // <ULEffect1 />
        // <h1>useCallback 1</h1>
        // <UCallback1 />
        // <h1>useCallback 2</h1>
        // <UCallback2 />
        // <h1>useMemo 1</h1>
        // <UMemo01 />
        //   <h1>useReducer 1</h1>
        // <UReducer01 />
        // <h1>useReducer 2</h1>
        // <UReducer02 />
      }

      <h1>useContext 2</h1>
      <ContextProvicer01 />
    </div>
  );
};

export default App;
