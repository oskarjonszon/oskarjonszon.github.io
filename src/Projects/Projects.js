import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Projects.css';

class Projects extends Component
{
  render()
  {
    return (
        <div className='Projects'>
            <h1> Projects </h1>
            <div className='project-list'>
              <NavLink to='/Connect_4'> Connect 4 </NavLink>
            </div>
        </div>
    );
  }
}

export default Projects;
