import React from 'react'

const Favorites = ({
    id,
    date,
    name,
    url,
    img,
    deleteFav,
    favStatus,
  }) => {
    return (
      <div>
        <img src={img} alt="artist" />
        <h3>{name}</h3>
        <p>{date}</p>
        <p>{url}</p>
        {favStatus && (
          <span className="update-favs">Added to your favorites!</span>
        )}
        <button onClick={() => deleteFav(id)}>
          Un-Fave
        </button>
      </div>
    )
}

export default Favorites
