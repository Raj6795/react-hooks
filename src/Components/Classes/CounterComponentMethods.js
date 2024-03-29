import React, { Component } from "react";

class CounterComponentMethods extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `Clicked ${this.state.count} times`;
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>Clicked {count} times</button>
      </div>
    );
  }
}

export default CounterComponentMethods;
