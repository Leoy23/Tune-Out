import React from 'react'

const EventCards = ({id, date, name, url, img}) => {
  return (
    <div>
      <img src={img} alt='artist'/>  
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{url}</p>
      <button>Event Details</button>
    </div>
  )
}

export default EventCards;



