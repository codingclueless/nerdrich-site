import React, { useState } from 'react';
import './NavMobile.scss';
import { Link } from 'react-router-dom';
import HamburgerMobile from './HamburgerMobile';
import logoImg from '../../../Assets/logo-white-site.png';

const NavMobile = () => {
  const [open, setOpen] = useState(false);
 
  return (
    <div className='Nav'>
      <div className='left'>
        <Link to='/' className='logo'>
          <img src={logoImg} alt="W"/>
        </Link>
      </div>
      <div className='right' >
        <HamburgerMobile open={open} setOpen={setOpen}/>
      </div>
    </div>
  );
};

export default NavMobile;
