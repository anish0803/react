import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Check() {
  const [count, setCount] = useState(0);

  const change = () => {
    console.log("in change");
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("in effect");
    let data = setInterval(change, 1000);

    // component will unmount or clean up
    return () => {
      console.log("cleaning the component...");
      clearInterval(data);
    };
  }, []);

  return <div>{count}</div>;
}

export default Check;
