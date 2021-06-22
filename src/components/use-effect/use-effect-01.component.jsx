import React, { useEffect, useState } from "react";
import useForm from "../use-state/custom-hooks/use-form.component";
import Hello from "./dummy-component/hello-dummy.component";
const UEffect01 = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });

  const [showHello, setShowHello] = useState(true);

  // // componnetDidMount
  // useEffect(() => {
  //   console.log("Rendering");
  // }, []);

  // // componnetDidMount + componentdidUpdate
  // useEffect(() => {
  //   console.log("Rendering");
  // });

  // // rerendering only dependent on email & password
  // useEffect(() => {
  //   console.log("Rendering");
  // }, [values.email, values.password]);

  // // componentDidMount + componentWillUnmount
  // useEffect(() => {
  //   console.log("Rendering");

  //   return () => {
  //     // componentWillUnmount code
  //   };
  // }, []);

  // // componentDidMount + componentWillUnmount
  // useEffect(() => {
  //   console.log("Rendering");
  //   const onMouseMove = (e) => {
  //     console.log(e);
  //   };
  //   window.addEventListener("mousemove", onMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, []);

  // Multiple useEffect
  useEffect(() => {
    console.log("mount1");
  }, []);
  useEffect(() => {
    console.log("mount2");
  }, []);

  return (
    <div>
      <button onClick={() => setShowHello(!showHello)}>Toggle Hello</button>
      {showHello && <Hello />}
      <br />
      <input
        name="name"
        type="name"
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
      />
      <br />
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

export default UEffect01;
