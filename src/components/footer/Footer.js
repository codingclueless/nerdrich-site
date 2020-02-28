import React from 'react';
import './Footer.scss';
import { FaLinkedin, FaGithubSquare, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <div className='Footer'>
      <p className='followMe'>FOLLOW ME</p>
      <div className='icons'>
        <Link 
          to="route" 
          onClick={(e) => 
          {e.preventDefault(); window.open('https://github.com/codingclueless');}
          }>
          <FaGithubSquare className='icon'/>
        </Link>
        <Link 
          to="route" 
          onClick={(e) => 
          {e.preventDefault(); window.open('https://www.instagram.com/codingclueless/');}
          }>
          <FaInstagram className='icon'/>
        </Link>
        <Link 
          to="route" 
          onClick={(e) => 
          {e.preventDefault(); window.open('https://www.linkedin.com/in/wesgriffincodes/');}
          }>
          <FaLinkedin className='icon'/>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
