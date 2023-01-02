import PropTypes from "prop-types";
import React, { useState } from "react";
import "./EventCards.css";

const EventCards = ({
  id,
  date,
  name,
  venue,
  city,
  state,
  url,
  image,
  addToFavs,
  deleteFav,
}) => {
  const [favStatus, setFavStatus] = useState(false);
  const [text, setText] = useState("Fave");

  const handleClick = () => {
    if (!favStatus) {
      setFavStatus(true);
      addToFavs(id, name, date, url);
      setText("Un-Fave");
    } else {
      setFavStatus(false);
      deleteFav(id);
      setText("Fave");
    }
  };

  return (
    <article className="display-cards">
      <div className="img-container">
        <img
          className="artist-pic"
          src={image}
          alt="artist"
          height={"70%"}
          width={"80%"}
        />
      </div>
      <div className="card-info">
        <h3>{name}</h3>
        <p>Date: {date}</p>
        <h4>
          Venue: <i>{venue}</i>
        </h4>
        <h4>
          Location: {city}, {state}
        </h4>
        <a className="ticket-links" href={`${url}`}>
          GET TICKETS HERE!
        </a>
      </div>
      <div className="fav-status">
        <div className="status-span">
          {favStatus && (
            <span className="update-favs">Added to your faves!</span>
          )}
        </div>
        <button className="fav-btn" onClick={handleClick}>
          {text}
        </button>
      </div>
    </article>
  );
};

EventCards.propTypes = {
  addToFavs: PropTypes.func.isRequired,
  date: PropTypes.string,
  deleteFav: PropTypes.func.isRequired,
  id: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  venue: PropTypes.string,
};

export default EventCards;
