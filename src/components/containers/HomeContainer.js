import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Home from '../home/homeDesktop/Home';
import HomeMobile from '../home/homeMobile/HomeMobile';

const HomeContainer = () => {

  return useMediaQuery({ query: '(min-width: 769px)' }) ? <Home/> : <HomeMobile/>; 
  
};

export default HomeContainer;
