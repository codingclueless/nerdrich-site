import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import './App.scss';
import HomeContainer from './components/containers/HomeContainer';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import NavContainer from './components/containers/NavContainer';

export default function App() {

  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(100%,0,0)' },
  });

  return transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} style={props} className='App'>
      <div className='nav'>
        <NavContainer/>
      </div>
      <div className='mainRoute'>
        <Switch location={location}>
          <Route path='/' exact component={HomeContainer}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='*'>
            <Redirect to='/'/>
          </Route>
        </Switch>
      </div>
    </animated.div>
  ));
}
  

