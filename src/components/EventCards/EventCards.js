import PropTypes from "prop-types"
import React from "react";
import "./EventCards.css"

const EventCards = ({
  id,
  date,
  name,
  venue,
  url,
  image,
  addToFavs,
  deleteFav,
  favStatus,
}) => {

  const text = favStatus === true ? "Un-Fave" : "Fave";
  return (
    <article className="display-cards">
      <img src={image} alt="artist" />
      <h3>{name}</h3>
      <p>{date}</p>
      <i><h4>{venue}</h4></i>
      <p>{url}</p>
      {favStatus && (
        <span className="update-favs">Added to your faves!</span>
      )}
      <button
      className="fav-btn"
        onClick={
          favStatus === true 
            ? () => deleteFav(id)
            : () => addToFavs(id, name, date, url)
        }
      >
        {text}
      </button>
    </article>
  );
};

EventCards.propTypes = {
  addToFavs: PropTypes.func.isRequired,
  date: PropTypes.string,
  deleteFav: PropTypes.func.isRequired,
  favStatus: PropTypes.bool.isRequired,
  id: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  venue: PropTypes.string
}

export default EventCards;
