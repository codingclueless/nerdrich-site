import React, { useState } from 'react';
import './HomeMainMobile.scss';
import { Link } from 'react-router-dom';
import Arrow from '../homeDesktop/Arrow';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
import Resume from '../../resume/Resume';

const HomeMainMobile = ({ project, upCount }) => {

  const mainSpring = useSpring({ from: { opacity: 0, transform: 'translateY(150px)' }, opacity: 1, transition: '1.5s ease-out', transform: 'translateY(0px)' });

  const bgSpring = useSpring({ from: { opacity: 0, transform: 'translateY(-250px)' }, opacity: 1, transition: '1.5s ease-out', transform: 'translateY(0px)' });
  const bgClass = (upCount === 2 ? 'bg1' : upCount === 0 ? 'bg2' : 'bg0');

  const [resumeOpen, setResumeOpen] = useState(false);
  const demo = (
    <>
      <Link to={project.arrow2Link} 
        onClick={project.arrow2Link === 'route' ? (e) => 
        {e.preventDefault(); window.open(project.arrow2OnClick);} : () => setResumeOpen(!resumeOpen)}
        className='link'>
        <Arrow text={project.arrow2Text} />
      </Link>
      {project.id === 1 ? <Resume resumeOpen={resumeOpen}/> : ''}
    </>
  );
  
  return (
    <>
      <animated.div style={mainSpring} className='HomeMainMobile'>
        <h3 className='title'>{project.title}</h3>
        <div className='name'>
          <h1>{project.name}</h1>
          <p className='number'>0{project.number}</p>
        </div>
        <p className='paragraph'>
          {project.paragraph}
        </p>
        {demo}
        <Link to={project.arrowLink} 
          onClick={project.arrowLink === 'route' ? (e) => 
          {e.preventDefault(); window.open(project.arrowOnClick);} : ''}
          className='link'>
          <Arrow text={project.arrowText} />
        </Link>
      </animated.div>
      <animated.div style={bgSpring} className={bgClass}></animated.div>
    </>
  );
};

HomeMainMobile.propTypes = { 
  project: PropTypes.object,
  upCount: PropTypes.func
};

export default HomeMainMobile;
