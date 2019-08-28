import React, { Component } from 'react';

export default class SimpleComponent extends Component {
  state = {
    mood: 'happy',
  };

  handleClick = () =>
    this.state.mood === 'happy' ? this.setState({ mood: 'sad' }) : this.setState({ mood: 'happy' });
  toggleSize = () =>
    this.state.size === 20 ? this.setState({ size: 50 }) : this.setState({ size: 20 });

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}
