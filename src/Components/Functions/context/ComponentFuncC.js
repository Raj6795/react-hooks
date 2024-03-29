import React, { useContext } from "react";
import { LocationContext } from "../../../utils/LocationContext";
import { AgeContext } from "../../../utils/AgeContext";

const ComponentFuncC = () => {
  const location = useContext(LocationContext);
  const age = useContext(AgeContext);
  return (
    <div>
      <h2>
        I live in {location}, I am {age} years old.
      </h2>
    </div>
  );
};

export default ComponentFuncC;
