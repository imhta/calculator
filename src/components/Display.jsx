import React from 'react';
import './Display.scss';
import PropTypes from 'prop-types';

function Display({ result }) {
  return <div className="Display"><p>{result}</p></div>;
}

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
