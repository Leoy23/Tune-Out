import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <h1>Tune Out</h1>
      <span className='nav-bar-links'>
        <NavLink className="inactive" exact to="/">Home</NavLink><NavLink className="inactive" to="/favorites">Favorites</NavLink>
      </span>
    </nav>
  );
};

export default NavBar
