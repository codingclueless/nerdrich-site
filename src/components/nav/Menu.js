import React from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';
import { bool } from 'prop-types';
import { FaHome } from 'react-icons/fa';
import { IoIosContact, IoIosMail } from 'react-icons/io';

const Menu = ({ open }) => {

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

Menu.propTypes = {
  open: bool.isRequired,
};



export default Menu;
