import React, { useState } from "react";
// import { INITIAL_COUNT } from "../constants";

export function CounterHooks() {
  //   const initialCount = 10;
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Vasantfaash");

  const handleName = () => {
    if (name !== "Vasanth") {
      setName(name.toUpperCase());
    }
  };

  const handleIncrement = (value) => {
    setCount(count + value);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    // count -= 1;
    console.log(count);
  };

  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      console.log(`i --> ${i}, count ---> ${count}`);
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <>
      <p>Count: {count}</p>
      <p>My name is {name}</p>
      {/* pass params then use () =>  */}
      <button onClick={() => handleIncrement(5)}>increment</button>
      <button onClick={incrementByFive}>increment by 5</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={handleName}>capitalize</button>
    </>
  );
}
