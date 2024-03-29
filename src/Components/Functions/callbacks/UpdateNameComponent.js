import React from "react";

const UpdateNameComponent = ({ handleName }) => {
  console.log("Update Name Component");
  return (
    <div>
      <input type="text" onChange={handleName} />
    </div>
  );
};

export default React.memo(UpdateNameComponent);
