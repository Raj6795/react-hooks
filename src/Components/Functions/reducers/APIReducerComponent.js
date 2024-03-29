// import React, { useReducer } from "react";
// import axios from "axios";

// const initialState = {
//   loading: false,
//   post: {},
//   error: "",
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "LOADING":
//       return {
//         loading: true,
//         post: {},
//         error: "",
//       };
//     case "SUCCESS":
//       return {
//         loading: false,
//         post: action.payload,
//         error: "",
//       };
//     case "FAILURE":
//       return {
//         loading: false,
//         post: {},
//         error: "Something went wrong",
//       };
//     default:
//       return state;
//   }
// };
// const APIReducerComponent = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const getData = async () => {
//     try {
//       dispatch({ type: "LOADING" });
//       const data = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts/1"
//       );
//       dispatch({ type: "SUCCESS", payload: data.data });
//     } catch (err) {
//       dispatch({ type: "FAILURE" });
//     }
//   };
//   return (
//     <div>
//       <button onClick={getData}>Get Data</button>
//       {state.loading ? <h2>Loading...</h2> : null}
//       {state.post.title ? <h2>{state.post.title}</h2> : null}
//       {state.error ? <h2>{state.error}</h2> : null}
//     </div>
//   );
// };

// export default APIReducerComponent;

import React, { useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        error: "",
        post: {},
      };
    case "SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    case "ERROR":
      return {
        loading: false,
        error: "Something went wrong!",
        post: {},
      };
    default:
      return state;
  }
};

const APIReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getData = async () => {
    try {
      dispatch({ type: "LOADING" });
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      dispatch({ type: "SUCCESS", payload: data.data });
    } catch (err) {
      dispatch({ type: "ERROR" });
    }
  };
  return (
    <div>
      <button onClick={getData}>Get data</button>
      {state.loading ? <h2>Loading...</h2> : null}
      {state.post.title ? <h2>{state.post.title}</h2> : null}
      {state.error ? <h2>{state.error}</h2> : null}
    </div>
  );
};

export default APIReducerComponent;

// useState is used for updating state values which are primitive data types, such as string, number or boolean.
// useReducer is used for updating state which is an object or array.
