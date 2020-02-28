import React, { useState } from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';
import logoImg from '../../Assets/logo-white-site.png';

const Nav = () => {
  const [open, setOpen] = useState(false);
 
  return (
    <div className='Nav'>
      <div className='left'>
        <Link to='/' className='logo'>
          <img src={logoImg} alt="W"/>
        </Link>
      </div>
      <div className='right' >
        <Hamburger open={open} setOpen={setOpen}/>
      </div>
    </div>
  );
};

export default Nav;
