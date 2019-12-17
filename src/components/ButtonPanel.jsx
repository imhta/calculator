import React from 'react';
import './ButtonPanel.scss';
import Button from './Button.jsx';

function ButtonPanel() {
  const grey = '#e0e0e0';
  return (
    <section className="ButtonPanel">
      <div className="row">
        <Button name="AC" color={grey} />
        <Button name="+/-" color={grey} />
        <Button name="%" color={grey} />
        <Button name="÷" />
      </div>
      <div className="row">
        <Button name="7" color={grey} />
        <Button name="8" color={grey} />
        <Button name="9" color={grey} />
        <Button name="X" />
      </div>
      <div className="row">
        <Button name="4" color={grey} />
        <Button name="5" color={grey} />
        <Button name="6" color={grey} />
        <Button name="-" />
      </div>
      <div className="row">
        <Button name="1" color={grey} />
        <Button name="2" color={grey} />
        <Button name="3" color={grey} />
        <Button name="+" />
      </div>
      <div className="row">
        <Button name="0" color={grey} wide />
        <Button name="." color={grey} />
        <Button name="=" />
      </div>
    </section>
  );
}

export default ButtonPanel;
