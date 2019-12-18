import React, { useState } from 'react';
import Display from './Display.jsx';
import './App.scss';
import ButtonPanel from './ButtonPanel.jsx';
import calculate from '../logic/calculate.js';

function App() {
  const [state, setState] = useState({
    queue: [], total: '', next: '', operation: '', target: 'total',
  });
  const handleClick = (btnName) => {
    setState(calculate(state, btnName));
  };
  return (
    <div id="App">
      <Display result={state.queue.join('') || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}

export default App;
