import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, wide, color, clickHandler }) {
  const style = {
    width: wide ? '50%' : '25%',
    backgroundColor: color,
    border: '1px solid #d1d1d1',
    fontSize: '2rem',
    cursor: 'pointer',
  };
  const handleClick = () => clickHandler(name);

  return <button style={style} onClick={handleClick}>{name}</button>;
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  wide: false,
  color: '#e0e0e0',
};
export default Button;
