import React from "react";
import EventCards from "../EventCards/EventCards";
import { NavBar } from "../NavBar/NavBar";

export const FavoritesContainer = ({ favs, favStatus, deleteFav }) => {
  const handleError = favs.length ? (
    favs.map((event) => {
      console.log(8, event)
      return (
        <EventCards
          id={event.id}
          name={event.name}
          date={event.date}
          url={event.url}
          img={event.image}
          favStatus={favStatus}
          deleteFav={deleteFav}
          key={event.id}
        />
      );
    })
  ) : (
    <h3 className="fav-msg-error"> Please choose a favorite. . . </h3>
  );

  return (
    <>
      <NavBar />
      { handleError }
    </>
    );
};
