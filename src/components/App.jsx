import React, { useState } from 'react';
import Display from './Display.jsx';
import './App.scss';
import ButtonPanel from './ButtonPanel.jsx';
import calculate from '../logic/calculate.js';

function App() {
  const [state, setState] = useState({
    total: [], totalOne: '', next: '', operation: '', target: 'totalOne',
  });
  const handleClick = (btnName) => {
    setState(calculate(state, btnName));
  };
  return (
    <div id="App">
      <Display result={state.total.join('') || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}

export default App;
