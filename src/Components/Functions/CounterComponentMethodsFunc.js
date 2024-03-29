import React, { useState, useEffect } from "react";

const CounterComponentMethodsFunc = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });

  // UseEffect will be called after the mounting of component and also after the updating of component

  const handleClick = () => {
    setCount((prevState) => prevState + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Clicked {count} times function!</button>
    </div>
  );
};

export default CounterComponentMethodsFunc;
