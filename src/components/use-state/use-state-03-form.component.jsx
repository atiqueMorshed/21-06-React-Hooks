import React from "react";
import useForm from "./custom-hooks/use-form.component";

const UState03 = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });

  return (
    <div>
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

export default UState03;
