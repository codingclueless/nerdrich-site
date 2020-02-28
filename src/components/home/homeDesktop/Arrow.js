import React from 'react';
import './Arrow.scss';
import PropTypes from 'prop-types';

const Arrow = ({ text, rotate }) => {

  return (
    <div className='Arrow' style={{ transform: `rotate(${rotate})` }}>
      <div className='animatedArrow'>
        <div className='theArrow left'>
          <span className='shaft'></span>
        </div>
        <div className='main'>
          <div className='text'>{text}</div>
          <span className='theArrow right'>
            <span className='shaft'></span>
          </span>
        </div>
      </div>
    </div>
  );
};

Arrow.propTypes = { 
  text: PropTypes.string,
  rotate: PropTypes.string,
};

export default Arrow;
