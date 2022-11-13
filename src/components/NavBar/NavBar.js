import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <h1 className='nav-title'><span className='t-syle'>T</span>une<span className='o-style'> - O</span>ut</h1>
      <span className='link-box'>
        <NavLink className="inactive" exact to="/home-page">Home</NavLink><NavLink className="inactive" to="/favorites">Favorites</NavLink>
      </span>
    </nav>
  );
};

