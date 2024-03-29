import React from "react";

const LocationComponent = ({ location }) => {
  console.log("Location Component");
  return (
    <div>
      <h2>Location - {location}</h2>
    </div>
  );
};

export default React.memo(LocationComponent);
