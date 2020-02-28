import React, { useState } from 'react';
import './HomeMobile.scss';
import ScrollBarMobile from './ScrollBarMobile';
import HomeMainMobile from './HomeMainMobile';
import Footer from '../../footer/Footer';
import { projects } from '../../../services/projects'; 

const HomeMobile = () => {
  const [upCount, setUpCount] = useState(2);
  const [downCount, setDownCount] = useState(0);

  const upClicked = () => {
    setUpCount(upCount >= 2 ? upCount - 2 : upCount + 1);
    setDownCount(downCount >= 2 ? downCount - 2 : downCount + 1);
  };

  const downClicked = () => {
    setUpCount(upCount <= 0 ? upCount + 2 : upCount - 1);
    setDownCount(downCount <= 0 ? downCount + 2 : downCount - 1);
  };

  const mainList = projects.map(project => project.id === upCount - 1 ?
    <HomeMainMobile key={project.id} project={project} upCount={upCount}/> : project.id === upCount + 2 ? <HomeMainMobile key={project.id} project={project} upCount={upCount}/> : ''
  );

  return (
    <>
      <div className='HomeMobile'>
        <div className='main'>
          {mainList}
        </div>
        <div className='scrollBar'>
          <ScrollBarMobile upClicked={upClicked} upCount={upCount} downCount={downCount} downClicked={downClicked}/>
        </div>
        <div className='footer'>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default HomeMobile;
