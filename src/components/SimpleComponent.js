// Code SimpleComponent Here
import React, {Component} from 'react';

export default class SimpleComponent extends Component {
    state = {
        mood: 'happy'
    }

    handleMood = () => {
        this.setState({
            mood: 'sad'
        })
    }

    render(){
        return (<div onClick={this.handleMood}>{this.state.mood}</div>)
    }
}