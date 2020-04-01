// Code SimpleComponent Here
import React, { Component } from 'react';

export default class SimpleComponent extends Component {
  state = {
    mood: 'happy'
  }

  handleClick = () => {
    this.setState((prevState) => {
      const mood = prevState.mood === 'happy' ? 'sad' : 'happy'
      return { mood }
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    );
  }
}