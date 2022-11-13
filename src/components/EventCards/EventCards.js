import React from 'react'

const EventCards = ({id, date, name, url, img, addToFavs, deleteFav, favStatus}) => {
  const text = favStatus ? 'Un-Fave' : 'Fave';
  return (
    <div>
      <img src={img} alt='artist'/>  
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{url}</p>
      {favStatus && <span className='update-favs'>Added to your favorites!</span>}
      <button onClick={favStatus ? () => deleteFav(id) : () => addToFavs(id, name, date, url)}>{text}</button>
    </div>
  )
}

export default EventCards;



