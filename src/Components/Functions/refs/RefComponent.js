import React, { useRef, useState, useEffect } from "react";

const RefComponent = () => {
  const [name, setName] = useState("");

  const inputRef = useRef(null);
  const nameRef = useRef("");

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    // setName(e.target.value);
    nameRef.current = e.target.value;
    console.log(nameRef.current);
  };
  return (
    <div>
      <label>Name</label>
      <input ref={inputRef} type="text" onChange={handleChange} />
    </div>
  );
};

export default RefComponent;
