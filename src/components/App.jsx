import React from 'react';
import Display from './Display.jsx';
import './App.scss';
import ButtonPanel from './ButtonPanel.jsx';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate.js';

function App() {
  return (
    <div id="App">
      <Display result="0" />
      <ButtonPanel />
    </div>
  );
}

export default App;
