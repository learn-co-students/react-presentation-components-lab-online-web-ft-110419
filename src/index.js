import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={event => { event.target.style.color = event.target.style.color === "rgb(255, 0, 0)" ? "rgb(0, 0, 255)" : "rgb(255, 0, 0)" }} />
  </div>,
  document.getElementById('root')
);
