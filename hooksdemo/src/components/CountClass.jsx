import React, { Component } from "react";

export class CountClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
    };
  }

  handleIncrement = (stepValue) => {
    this.setState({ count: this.state.count + stepValue });
  };

  render() {
    return (
      <>
        <p>count - {this.state.count}</p>
        <button onClick={() => this.handleIncrement(3)}>increment</button>
      </>
    );
  }
}
