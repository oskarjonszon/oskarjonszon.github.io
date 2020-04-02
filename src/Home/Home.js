import React, { Component } from 'react';
import './Home.css';
import Canvas from './Canvas'

class Home extends Component
{
  render()
  {
    return (
      <div className='home'>
          <h1> Welcome </h1>
          <Canvas />
      </div>
    );
  }
}

export default Home;
