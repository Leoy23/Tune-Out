import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export const LandingPage = () => {
  return (
    <div className='landing-page'>
      <h1>Tune Out</h1>
      <div className='explore-btn-section'>
      <Link to="/home-page">
        <button className='explore-btn'>Explore Events</button>
      </Link>
      </div>
    </div>
  )
}

