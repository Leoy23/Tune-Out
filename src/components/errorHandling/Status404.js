import React from 'react';
import Status from './Status';
import './Status404.css';
import { Link } from 'react-router-dom';

const Status404 = () => {
  return (
    <Status code={404}>
      <div className='error-wrapper'>
        <div className='st404-title'>
          <h4>404</h4>
        </div>
        <div className='st404title-2'>
          <h2>The beat ain't over</h2>
        </div>
        <div className='st404title-3'>
          <h2>YET</h2>
        </div>
        <div className='st404title-4'>
          <Link to='/' className='link-404-con'>
            <h5>Let's take you back home . . .</h5>
          </Link>
        </div>
      </div>
    </Status>
  );
};

export default Status404;
