import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={(event) => {event.target.style.background = (event.target.style.background === "rgb(50, 200, 200)" ? "rgb(180, 0, 200)" : "rgb(50, 200, 200)")}} />
  </div>,
  document.getElementById('root')
);