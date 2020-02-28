import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Nav from '../nav/Nav';
import NavMobile from '../nav/navMobile/NavMobile';

const NavContainer = () => {

  return useMediaQuery({ query: '(min-width: 769px)' }) ? <Nav/> : <NavMobile/>; 
  
};

export default NavContainer;
