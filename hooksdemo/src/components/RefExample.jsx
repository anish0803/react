import React, { useState, useEffect, useRef } from "react";

export function RefExample() {
  const [name, setName] = useState("");
  //   const countObj = useRef(0);
  const inputRef = useRef();
  const [fontColor, setColor] = useState("red");

  const style = {
    color: fontColor,
    fontWeight: "bold",
  };

  //   useEffect(() => {
  //     // countObj.current = countObj.current + 1;
  //     console.log(inputRef.current);
  //     // inputRef.current.value = "vasanth";
  //     // inputRef.current.focus();
  //     inputRef.current.style.border = "2px solid red";
  //     // console.log(countObj.current);
  //   }, [name]);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onFocus={() => {
          inputRef.current.style.outline = 0;
          inputRef.current.style.border = "2px solid blue";
        }}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        // ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p ref={inputRef}>this is {name}</p>
      <button onClick={() => (inputRef.current.value = "dasdas")}>click</button>
      {/* <p>rendered {countObj.current} times</p> */}

      <p style={style}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati,
        quia.
      </p>
      <button onClick={() => setColor("green")}>change color</button>
    </div>
  );
}
