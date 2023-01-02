import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <h1 className='nav-title'> Tune-Out</h1>
      <div className='link-box'>
        <NavLink className='home-link text' exact to='/home-page'>
          Home
        </NavLink>
        <NavLink className='favorites-link text' to='/favorites'>
          Favorites
        </NavLink>
      </div>
    </nav>
  );
};
