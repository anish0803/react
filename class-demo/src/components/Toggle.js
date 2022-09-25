import React, { Component } from "react";

export class Toggle extends Component {
  // state -> store some data inside a variable
  constructor(props) {
    super(props);
    // state values are changable
    this.state = {
      isToggleOn: false,
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (click) => {
    console.log(this);
    console.log(click);
    this.setState({
      isToggleOn: !this.state.isToggleOn,
    });
  };

  render() {
    return (
      //   <button
      //     onClick={() =>
      //       this.handleClick({
      //         name: "kuldeep",
      //       })
      //     }
      //   >
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}
