import React from 'react';
import resumePng from '../../Assets/resume.png';
import PropTypes from 'prop-types';
import './Resume.scss';

const Resume = ({ resumeOpen }) => {

  const slideIn = (resumeOpen ?  { transform: 'translateX(0%)' } : { transform: 'translateX(0%)' });

  return (
    <div className='Resume' style={slideIn}>
      <img src={resumePng} alt="my resume"/>
    </div>
  );
};

Resume.propTypes = { 
  resumeOpen: PropTypes.object,
};

export default Resume;
