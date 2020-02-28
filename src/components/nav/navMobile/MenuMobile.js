import React from 'react';
import './MenuMobile.scss';
import { Link } from 'react-router-dom';
import { bool } from 'prop-types';
import { FaHome } from 'react-icons/fa';
import { IoIosContact, IoIosMail } from 'react-icons/io';

const MenuMobile = ({ open }) => {

  const slideIn = (open ?  { transform: 'translateX(0)' } : { transform: 'translateX(103%)' });

  return (
    <nav className='Menu' style={slideIn}>
      <Link className='link' to="/">
        <FaHome/>
        <p>Home</p>
      </Link>
      <Link className='link' to="/about">
        <IoIosContact/>
        <p>About</p>
      </Link>
      <Link className='link' to="/contact">
        <IoIosMail/>
        <p>Contact</p>
      </Link>
    </nav>

  );
};

MenuMobile.propTypes = {
  open: bool.isRequired,
};



export default MenuMobile;
