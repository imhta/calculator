import React from 'react';
import Display from './Display.jsx';
import './App.scss';
import ButtonPanel from './ButtonPanel.jsx';

function App() {
  return (
    <div className="App">
      <Display result="0" />
      <ButtonPanel />
    </div>
  );
}

export default App;
