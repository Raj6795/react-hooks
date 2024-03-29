import React from "react";

const UpdateLocationComponent = ({ handleLocation }) => {
  console.log("Update Location Component");
  return (
    <div>
      <input type="text" onChange={handleLocation} />
    </div>
  );
};

export default React.memo(UpdateLocationComponent);
