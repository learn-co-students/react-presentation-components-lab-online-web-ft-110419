// Code SimpleComponent Here
import React from 'react';

class SimpleComponent extends React.Component { 
    
    constructor(){
      super()
      this.state = {
        mood: "happy"
    }
}

    render(){
      return (
       <div onClick={this.handleClick}>{this.state.mood}</div>
      )
    }

    handleClick = () => {
        this.setState({
            mood: "sad"
        })
    }


}

export default SimpleComponent