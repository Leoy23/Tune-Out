import PropTypes from "prop-types"
import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Favorites } from "../Favorites/Favorites";
import "./FavoritesContainer.css"

export const FavoritesContainer = ({ favs, deleteFav }) => {
  const handleError = favs.length ? (
    favs.map((event) => {
      return (
        <Favorites
          id={event.id}
          name={event.name}
          date={event.date}
          url={event.url}
          deleteFav={deleteFav}
          key={event.id}
        />
      );
    })
  ) : (
    <h3 className="fav-msg-error"> Add some favorites please. . . </h3>
  );

  return (
    <section className="favorites-container">
      <NavBar />
      <span className="fav-cards-space">
        { handleError }
      </span>
    </section>
    );
};

FavoritesContainer.propTypes = {
  deleteFav: PropTypes.func.isRequired,
  favs: PropTypes.array.isRequired
}
