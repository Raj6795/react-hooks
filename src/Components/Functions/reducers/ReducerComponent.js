// import React, { useReducer } from "react";

// const initialState = 5;
// const zeroState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return zeroState;
//     default:
//       return state;
//   }
// };
// const ReducerComponent = () => {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <h2>Count - {count}</h2>
//       <button onClick={() => dispatch("increment")}>Increase</button>
//       <button onClick={() => dispatch("decrement")}>Decrease</button>
//       <button onClick={() => dispatch("reset")}>Reset</button>
//     </div>
//   );
// };

// export default ReducerComponent;

// 1. Import and call useReducer with passing a reducer function and an initial state as parameters
// 2. Define the initialState and reducer function, pass the state parameter to the reducer function as a new parameter.
// 3. Write switch cases for the different actions received.
// 4. Use the dispatch method to trigger an action

import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const ReducerComponent = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Count-{count}</h2>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default ReducerComponent;
