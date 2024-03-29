import React, { Component } from "react";

class MouseComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  componentDidMount() {
    console.log("event added to documnet from class");
    document.addEventListener("mousemove", this.handleMouseMove);
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.handleMouseMove);
  }

  handleMouseMove = (e) => {
    console.log(e.clientX, e.clientY);
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };
  render() {
    const { x, y } = this.state;
    return (
      <div>
        <h3>
          X-{x}; Y-{y}
        </h3>
      </div>
    );
  }
}

export default MouseComponent;
