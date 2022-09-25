import React, { useState } from "react";

export const StateWithArray = () => {
  const [items, setItems] = useState([]);
  const [fruit, setFruit] = useState("");

  // 2 imp -> use only with react obj, always initialize at the top

  const addItem = () => {
    setItems([...items, fruit]);
    setFruit("");
  };

  return (
    <>
      <input
        type="text"
        value={fruit}
        placeholder={"add fruit"}
        onChange={(e) => setFruit(e.target.value)}
      />
      <button onClick={addItem}>add item</button>
      {items.map((item) => (
        <div>
          <span>{item}</span>
          <button
            onClick={() => {
              let filteredItems = items.filter((value) => value !== item);
              setItems([...filteredItems]);
            }}
          >
            delete
          </button>
        </div>
      ))}
    </>
  );
};
