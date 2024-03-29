import React, { useState } from "react";

const InputComponentFunc = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleFirstName = (e) => {
    setFormData({
      ...formData,
      firstName: e.target.value,
    });
  };
  const handleLastName = (e) => {
    setFormData({
      ...formData,
      lastName: e.target.value,
    });
  };

  // Use the spread operator to retain all the properties of the state while updating the state

  console.log(formData);
  return (
    <>
      <form>
        <label htmlFor="firstname">First name:</label>
        <input
          type="text"
          id="firstName"
          value={formData.firstName}
          onChange={handleFirstName}
        />
        <label htmlFor="lastname">Last name:</label>
        <input
          type="text"
          id="lastname"
          value={formData.lastName}
          onChange={handleLastName}
        />
      </form>
      <h2>Firstname: {formData.firstName}</h2>
      <h2>Lastname: {formData.lastName}</h2>
    </>
  );
};

export default InputComponentFunc;
