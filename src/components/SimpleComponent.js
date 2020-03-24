// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component {

    // default of happy
    state = {
        mood: 'happy'
    }

    // when clicked, the component's mood should toggle between happy and sad states.
    handleClick = () => {
        const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
        this.setState({ mood: newMood });
    }

    // handleClick serves as a callback to the divs click event
    // when clicked, the component's mood toggles b/w happy and sad states
    render() {
        return <div onClick={this.handleClick}>{this.state.mood}</div>
    }
}

export default SimpleComponent;