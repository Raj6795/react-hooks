import React, { useState, useCallback } from "react";
import UpdateNameComponent from "./UpdateNameComponent";
import NameComponent from "./NameComponent";
import UpdateLocationComponent from "./UpdateLocationComponent";
import LocationComponent from "./LocationComponent";

const ParentComponent = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  console.log("Parent component");

  // useCallback is a react method which will take in two arguments, 1st is the function definition and the 2nd is the dependency.
  // useCallback is used for performance optimization.
  // useCallback will work only when the child component is wrapped with React.memo

  const handleName = useCallback(
    (e) => {
      setName(e.target.value);
    },
    [name]
  );

  const handleLocation = useCallback(
    (e) => {
      setLocation(e.target.value);
    },
    [location]
  );

  return (
    <div>
      <UpdateNameComponent handleName={handleName} />
      <NameComponent name={name} />
      <UpdateLocationComponent handleLocation={handleLocation} />
      <LocationComponent location={location} />
    </div>
  );
};

export default ParentComponent;
