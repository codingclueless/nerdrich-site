import React from 'react';
import './ScrollBarMobile.scss';
import Arrow from '../homeDesktop/Arrow';
import PropTypes from 'prop-types';

const ScrollBarMobile = ({ upClicked, downClicked, upCount, downCount }) => {

  const textRight = (
    <div style={{ fontSize: '1rem' }}>
      <p>0{upCount}</p>
    </div>
  );

  const rotateLeft = '180deg';
  const textLeft = (
    <div style={{ transform: 'rotate(180deg)', fontSize: '1rem' }}>
      <p>0{downCount}</p>
    </div>
  );


  return (
    <div className='ScrollBarMobile'>
      <div onClick={downClicked} className='leftArrow'>
        <Arrow rotate={rotateLeft} text={textLeft}/>
      </div>
      <div onClick={upClicked} className='rightArrow'>
        <Arrow text={textRight}/>
      </div>
    </div>
  );
};

ScrollBarMobile.propTypes = { 
  upClicked: PropTypes.func,
  downClicked: PropTypes.func,
  upCount: PropTypes.number,
  downCount: PropTypes.number,
};

export default ScrollBarMobile;
