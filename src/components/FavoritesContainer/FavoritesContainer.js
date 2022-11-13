import PropTypes from "prop-types"
import React from "react";
// import EventCards from "../EventCards/EventCards";
import { NavBar } from "../NavBar/NavBar";
import { Favorites } from "../Favorites/Favorites";

export const FavoritesContainer = ({ favs, deleteFav }) => {
  const handleError = favs.length ? (
    favs.map((event) => {
      return (
        <Favorites
          id={event.id}
          name={event.name}
          date={event.date}
          url={event.url}
          img={event.image}
          deleteFav={deleteFav}
          key={event.id}
        />
      );
    })
  ) : (
    <h3 className="fav-msg-error"> Add some favorites please. . . </h3>
  );

  return (
    <>
      <NavBar />
      { handleError }
    </>
    );
};

FavoritesContainer.propTypes = {
  deleteFav: PropTypes.func.isRequired,
  favs: PropTypes.array.isRequired
}
