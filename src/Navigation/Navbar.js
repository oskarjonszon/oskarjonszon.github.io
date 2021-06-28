import React, { Component } from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

class Navbar extends Component
{
  render()
  {
    return (
      <nav className='nav'>
        <NavLink to='/'> Home </NavLink>
        <NavLink to='/projects'> Projects </NavLink>
        <NavLink to='/about'> About </NavLink>
      </nav>
    );
  }
}

export default Navbar;
