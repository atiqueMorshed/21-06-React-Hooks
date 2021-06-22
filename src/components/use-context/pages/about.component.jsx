import React, { useContext } from "react";
import UserContext from "../context/user-context";

const About = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>About</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default About;
