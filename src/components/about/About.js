import React from 'react';
import './About.scss';
// import Arrow from '../home/homeDesktop/Arrow';
// import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import { FaReact, FaNodeJs, FaNode } from 'react-icons/fa';
import { DiMongodb, DiFirebase } from 'react-icons/di';
import { useSpring, animated } from 'react-spring';

const About = () => {

  // const textLeft = (
  //   <div style={{ transform: 'rotate(180deg)' }}>
  //     <p>Connect</p>
  //   </div>
  // );
  // const textRight = (
  //   <div style={{ transform: 'rotate(0deg)' }}>
  //     <p>Connect</p>
  //   </div>
  // );

  const aboutMeBg = useSpring({ from: { opacity: 0, transform: 'translateY(200px)' }, opacity: 1, transition: '1.5s ease-out', transform: 'translateY(0px)' });
  const aboutMe = useSpring({ from: { opacity: 0, transform: 'translateY(-250px)' }, opacity: 1, transition: '1.5s ease-out', transform: 'translateY(0px)' });

  return (
    <div className='About'>

      <animated.div style={aboutMeBg} className='aboutMe'>
      </animated.div>
      <animated.h1 style={aboutMe} className='aboutH1'>About Me</animated.h1>

      <div className='bottom'>
        <div className='myStory'>
          <h1>My Story</h1>
          <p>
            {`I'm a MERN stack ninja with a desire to cut code! 
          Honestly I got into the coding world because I was always intrigued with what was going on behind the scenes. 
          Software development is like a puzzle that never ends, yet I'm happy to try and find the corners.
          Whether it's a backend that needs to supply data or a front-end that is set to blow the minds away of its users, it's all fun to piece together.
          I feel confident in my skills to take on any challenge and With my knowledge I feel I can quickly adapt to help on any project or team.`}
          </p>
        </div>

        <div className='mySkills'>
          <div className='leftSkill'>
            <h1>My Skills</h1>
          </div>
          <div className='rightSkill'>
            <div>
              <FaReact className='icon'/>
              <h3>React</h3>
            </div>
            <div>
              <FaNodeJs className='icon'/>
              <h3>Express</h3>
            </div>
            <div>
              <DiMongodb className='icon'/>
              <h3>MongoDb</h3>
            </div>
            <div>
              <FaNode className='icon'/>
              <h3>Node.js</h3>
            </div>
            <div>
              <p>05</p>
              <h3>Next.js</h3>
            </div>
            <div>
              <DiFirebase className='icon'/>
              <h3>Firebase</h3>
            </div>
          </div>
        </div>

        <div className='experience'>
          <div className='leftEx'>
            <h1>Experience</h1>
          </div>
          <div className='rightEx'>
            <div>
              <h3>App Lab</h3>
              <p>- 2019-2020</p>
            </div>
            <div>
              <h3>Alchemy Code Lab</h3>
              <p>- 2019</p>
            </div>
          </div>
        </div>

        <div className='footer'>
          <Footer className='foot' />
        </div>
      </div>
    </div>
  );
};

export default About;

// TODO: add in later
// <div className={styles.links}>
//   <div className={styles.linkLeft}>
//     <p>follow me</p>
//     <h1>LinkedIn</h1>
            
//     <Link 
//       className={styles.leftArrow}
//       to="route" 
//       onClick={(e) => 
//       {e.preventDefault(); window.open('https://www.linkedin.com/in/wesgriffincodes/');}
//       }>
//       <Arrow rotate='180deg' text={textLeft}/>
//     </Link>
//   </div>
//   <div className={styles.linkRight}>
//     <p>follow me</p>
//     <h1>Instagram</h1>
//     <Link 
//       to="route" 
//       onClick={(e) => 
//       {e.preventDefault(); window.open('https://www.instagram.com/codingclueless/');}
//       }>
//       <Arrow text={textRight}/>
//     </Link>   
//   </div>
// </div>;
