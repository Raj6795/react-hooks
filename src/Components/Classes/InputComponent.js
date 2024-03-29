import React, { Component } from "react";

export class InputComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
    };
  }

  handleFirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };
  handleLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };
  render() {
    const { firstName, lastName } = this.state;
    return (
      <>
        <form>
          <label htmlFor="firstname">First name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={this.handleFirstName}
          />
          <label htmlFor="lastname">Last name:</label>
          <input
            type="text"
            id="lastname"
            value={lastName}
            onChange={this.handleLastName}
          />
        </form>
        <h2>Firstname: {firstName}</h2>
        <h2>Lastname: {lastName}</h2>
      </>
    );
  }
}

export default InputComponent;
