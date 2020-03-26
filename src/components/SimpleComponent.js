import React, { Component } from 'react';

class SimpleComponent extends Component {
  constructor() {
    super()

    this.state = {
      mood: 'happy'
    }
  }  


  handleClick = () => {
    this.setState(prevState=> {
      let newMood = prevState.mood === 'happy' ? 'sad' : 'happy'
      return {mood: newMood}
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent