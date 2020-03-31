import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const moodChange = () => alert("I am sad")

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={moodChange} />
  </div>,
  document.getElementById('root')
);