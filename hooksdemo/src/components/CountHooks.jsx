import React, { useState } from "react";

export function CountHooks() {
  const initialCount = 0;
  const [count, setCount] = useState(0); //   [value, method which updates the value]
  return (
    <>
      <p>count - {count}</p>
      <button onClick={() => setCount(count + 3)}>increment</button>
    </>
  );
}
