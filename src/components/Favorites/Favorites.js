import PropTypes from 'prop-types';
import React from 'react';
import './Favorites.css';

export const Favorites = ({ id, date, name, url, img, deleteFav }) => {
  return (
    <article className='fav-cards'>
      <h3>{name}</h3>
      <p>Date: {date}</p>
      <a className='fav-ticket-link' href={`${url}`}>
        GET TICKETS HERE!
      </a>
      <button className='delete-fav-btn' onClick={() => deleteFav(id)}>
        Un-Fave
      </button>
    </article>
  );
};

Favorites.propTypes = {
  date: PropTypes.string,
  deleteFav: PropTypes.func.isRequired,
  id: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
};
