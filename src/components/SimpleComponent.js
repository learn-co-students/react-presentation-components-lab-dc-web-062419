// Code SimpleComponent Here
import React from "react";

class SimpleComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      mood: "happy"
    };
  }

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }

  handleClick = () => {
    const newMood = this.state.mood === "happy" ? "sad" : "happy";
    this.setState({ mood: newMood });
  };
}

export default SimpleComponent;
