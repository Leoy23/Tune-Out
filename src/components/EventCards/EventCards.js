import React from "react";

const EventCards = ({
  id,
  date,
  name,
  venue,
  url,
  img,
  addToFavs,
  deleteFav,
  favStatus,
  favs
}) => {

  const text = favStatus === true ? "Un-Fave" : "Fave";
  return (
    <div>
      <img src={img} alt="artist" />
      <h3>{name}</h3>
      <p>{date}</p>
      <i><h4>{venue}</h4></i>
      <p>{url}</p>
      {favStatus && (
        <span className="update-favs">Added to your favorites!</span>
      )}
      <button
        onClick={
          favStatus === true 
            ? () => deleteFav(id)
            : () => addToFavs(id, name, date, url)
        }
      >
        {text}
      </button>
    </div>
  );
};

export default EventCards;
