import React, { useState } from "react";

const UState01 = () => {
  const [count1, setCount1] = useState(10);
  const [count2, setCount2] = useState(20);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: [event.target.value],
    });
  };

  return (
    <div className="App">
      <button onClick={() => setCount1(count1 + 1)}>Increment Count 1</button>
      <p>{count1}</p>

      {
        // we can also get access to the state as prop when calling setCount
      }
      <button onClick={() => setCount2((currentCount) => currentCount + 1)}>
        Increment Count 2
      </button>
      <p>{count2}</p>
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      <br />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default UState01;
