import PropTypes from "prop-types"
import React from 'react'

export const Favorites = ({
    id,
    date,
    name,
    url,
    img,
    deleteFav,
  }) => {
    return (
      <div>
        <img src={img} alt="artist" />
        <h3>{name}</h3>
        <p>{date}</p>
        <p>{url}</p>
        <button onClick={() => deleteFav(id)}>
          Un-Fave
        </button>
      </div>
    )
}

Favorites.propTypes = {
  date: PropTypes.string,
  deleteFav: PropTypes.func.isRequired,
  id: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string
}


