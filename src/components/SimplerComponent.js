import React from 'react';

const SimplerComponent = props => {
	return (
		<div onClick={props.handleClick} style={{color: "#f00"}}>I am just happy</div>
	)
}

export default SimplerComponent;
