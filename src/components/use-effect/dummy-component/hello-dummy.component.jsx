import React, { useEffect } from "react";

const Hello = () => {
  useEffect(() => {
    console.log("Rendering Dummy Hello!");

    return () => {
      console.log("Unmounting Dummy Hello!");
    };
  }, []);

  return <p>Hello!</p>;
};

export default Hello;
