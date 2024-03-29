import React from "react";

const NameComponent = ({ name }) => {
  console.log("Name Component");
  return (
    <div>
      <h2>Name - {name}</h2>
    </div>
  );
};

export default React.memo(NameComponent);
