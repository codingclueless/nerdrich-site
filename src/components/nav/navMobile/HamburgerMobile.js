import React from 'react';
import './HamburgerMobile.scss';
import { bool, func } from 'prop-types';
import MenuMobile from './MenuMobile';

const HamburgerMobile = ({ open, setOpen }) => {

  const burgerColor = (open ? { background: 'black' } : { background: 'white' });
  const firstLine = { transform: (open ? 'rotate(45deg)' : 'rotate(0)') };
  const secondLine = (open ? { transform: 'rotate(45deg)', opacity: '0' } : { transform: 'rotate(0)', opacity: '1' });
  const thirdLine = { transform: (open ? 'rotate(-45deg)' : 'rotate(0)') };
  

  return (
    <div>
      <button className='burger' open={open} onClick={() => setOpen(!open)}>
        <div style={{ ...burgerColor, ...firstLine }}></div>
        <div style={{ ...burgerColor, ...secondLine }}></div>
        <div style={{ ...burgerColor, ...thirdLine }}></div>
      </button>
      <MenuMobile open={open} className='menu'/>
    </div>
  );
};

HamburgerMobile.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};



export default HamburgerMobile;
