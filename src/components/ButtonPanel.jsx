import React from 'react';
import './ButtonPanel.scss';
import PropTypes from 'prop-types';
import Button from './Button.jsx';

function ButtonPanel({ clickHandler }) {
  const handleClick = (buttonName) => clickHandler(buttonName);
  return (
    <section className="ButtonPanel">
      <div className="row">
        <Button name="AC" clickHandler={handleClick} />
        <Button name="+/-" clickHandler={handleClick} />
        <Button name="%" clickHandler={handleClick} />
        <Button name="÷" color="orange" clickHandler={handleClick} />
      </div>
      <div className="row">
        <Button name="7" clickHandler={handleClick} />
        <Button name="8" clickHandler={handleClick} />
        <Button name="9" clickHandler={handleClick} />
        <Button name="x" color="orange" clickHandler={handleClick} />
      </div>
      <div className="row">
        <Button name="4" clickHandler={handleClick} />
        <Button name="5" clickHandler={handleClick} />
        <Button name="6" clickHandler={handleClick} />
        <Button name="-" color="orange" clickHandler={handleClick} />
      </div>
      <div className="row">
        <Button name="1" clickHandler={handleClick} />
        <Button name="2" clickHandler={handleClick} />
        <Button name="3" clickHandler={handleClick} />
        <Button name="+" color="orange" clickHandler={handleClick} />
      </div>
      <div className="row">
        <Button name="0" wide clickHandler={handleClick} />
        <Button name="." clickHandler={handleClick} />
        <Button name="=" color="orange" clickHandler={handleClick} />
      </div>
    </section>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
