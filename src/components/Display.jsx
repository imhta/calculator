import React from 'react';
import './Display.scss';
import PropTypes from 'prop-types';

function Display({result}) {
    return (
        <h1>{result}</h1>
    );
}
Display.propTypes = {
    result: PropTypes.string.isRequired
}
export default Display;