import React, { Component } from "react";

class CounterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
    // this.setState({
    //   count: this.state.count + 1,
    // });
  };

  incrementFive = () => {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.incrementFive}>Clicked {count} times</button>
      </div>
    );
  }
}

export default CounterComponent;
