import React, { useState, useEffect } from "react";

const MouseComponentFunc = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("event added to document from function");
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [count]);

  // If you want useEffect to behave like componentDidMount, pass an empty array as the second parament useEffect

  // If there is any value in the dependency array the useEffect will be called when the value in dependency array is updated

  const handleMouseMove = (e) => {
    console.log(e.clientX, e.clientY);
    setX(e.clientX);
    setY(e.clientY);
  };

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Functional Comp</h1>
      <h3>
        X-{x}; Y-{y}
      </h3>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default MouseComponentFunc;
