import './App.css';
import { Component } from 'react';
import { Routes, Link } from 'react-router-dom'

import AnimatedName from '../Components/animatedName/animatedName';
import Socials from '../Components/Socials/Socials';
import Brand from '../Components/Brand/Brand';
import Projects from '../Components/Projects/Projects';
import About from '../Components/aboutMe/aboutMe';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='navbar'>
          <AnimatedName />
          <div className='navbar-links'>
            <Socials />
          </div>
        </div>
        <Brand />
        <Projects />
        <About />
      </div>
    );
  }
}


