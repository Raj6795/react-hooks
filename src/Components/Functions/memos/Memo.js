import React, { useState, useMemo } from "react";

const Memo = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  // const isEven = () => {
  //   let i = 0;
  //   while (i < 999999999) i++;
  //   return countOne % 2 === 0;
  // };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 999999999) i++;
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <div>
      <h2>Count One = {countOne}</h2>
      <button onClick={() => setCountOne((prevState) => prevState + 1)}>
        Increment One
      </button>
      <span>{isEven ? "even" : "odd"}</span>
      <h2>Count Two = {countTwo}</h2>
      <button onClick={() => setCountTwo((prevState) => prevState + 1)}>
        Increment Two
      </button>
    </div>
  );
};

export default Memo;
