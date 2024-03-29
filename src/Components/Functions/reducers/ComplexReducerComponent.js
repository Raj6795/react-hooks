import React, { useReducer, useState } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.value };
    default:
      return state;
  }
};

const ComplexReducerComponent = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  const [input, setInput] = useState(0);

  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  return (
    <div>
      <div>
        <h1>Count={count.count}</h1>
        {console.log(input)}
        <input type="number" onChange={handleChange} value={input} />
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "increment", value: Number(input) })}
        >
          Increment by user input
        </button>
        {/* <button>Decrement</button>
      <button>Decrement by 5</button>
      <button>Reset</button> */}
      </div>
      <div>
        <h1>CountTwo={countTwo.count}</h1>
        <button onClick={() => dispatchTwo({ type: "increment", value: 1 })}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default ComplexReducerComponent;
