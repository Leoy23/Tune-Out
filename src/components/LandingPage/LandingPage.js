import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export const LandingPage = () => {
  return (
    <div className='landing-page'>
      <div className='tune-out-wrapper'>
        <h1 className='tune-out-title'>Tune Out</h1>
      </div>
      <div className='explore-btn-section'>
        <Link to='/home-page'>
          <button className='explore-btn'>Explore Events</button>
        </Link>
      </div>
    </div>
  );
};
