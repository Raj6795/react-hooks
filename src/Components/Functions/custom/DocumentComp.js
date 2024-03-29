import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

const DocumentComp = () => {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increment
      </button>
    </div>
  );
};

export default DocumentComp;
