import React, { useState } from "react";

const CounterComponentFunc = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };

  // Use the arrow function to get access to previous state while updating the state using setCount.
  // Arrow function is used in the case where we want to update the state with respect to it's previous state.

  const incrementSix = () => {
    increment();
    increment();
    increment();
    increment();
    increment();
    increment();
  };
  return (
    <div>
      <button onClick={incrementSix}>
        Clicked {count} times from Function
      </button>
    </div>
  );
};

export default CounterComponentFunc;
