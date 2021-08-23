import React, { Component } from 'react';
import './Home.css';
import Canvas from './Canvas'

class Home extends Component
{
  render()
  {
    return (
      <div className='home'>
        <div className='intro'>
          <h2> Hi, </h2>
          <h1> I'm <span className='fat'>Oskar Jönsson</span>. </h1>
        </div>
        <div className='links'>
          <a href="#" className="icon github"></a>
          <a href="#" className="icon linked-in"></a>
          <a href="#" className="icon cv"></a>
          <a href="#" className="icon contact"></a>
        </div>

      </div>
    );
  }
}

export default Home;
