import React from 'react';
import './ScrollBar.scss';
import Arrow from './Arrow';
import PropTypes from 'prop-types';

const ScrollBar = ({ upClicked, downClicked, upCount, downCount }) => {
  
  const rotateUp = '270deg';
  const textUp = (
    <div style={{ transform: 'rotate(90deg)', fontSize: '.8rem' }}>
      <p>0{upCount}</p>
    </div>
  );

  const rotateDown = '90deg';
  const textDown = (
    <div style={{ transform: 'rotate(270deg)', fontSize: '.8rem' }}>
      <p>0{downCount}</p>
    </div>
  );


  return (
    <div className='ScrollBar'>
      <div onClick={upClicked} className='upArrow'>
        <Arrow rotate={rotateUp} text={textUp}/>
      </div>
      <div onClick={downClicked} className='downArrow'>
        <Arrow rotate={rotateDown} text={textDown}/>
      </div>
    </div>
  );
};

ScrollBar.propTypes = { 
  upClicked: PropTypes.func,
  downClicked: PropTypes.func,
  upCount: PropTypes.number,
  downCount: PropTypes.number,
};

export default ScrollBar;
