import React, { useState } from "react";
// import MouseComponent from "./Classes/MouseComponent";
import MouseComponentFunc from "./Functions/MouseComponentFunc";

const WrapperComponent = () => {
  const [showComp, setShowComp] = useState(true);

  const displayChild = () => {
    setShowComp(!showComp);
  };
  return (
    <div>
      <button onClick={displayChild}>Display child</button>
      {/* {showComp ? <MouseComponent /> : null} */}
      {showComp ? <MouseComponentFunc /> : null}
    </div>
  );
};

export default WrapperComponent;
