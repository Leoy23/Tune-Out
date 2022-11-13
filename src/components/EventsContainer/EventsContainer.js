import React from "react";
import EventCards from "../EventCards/EventCards";

export const EventsContainer = ({
  seattleRapEvents,
  seattleRBEvents,
  portlandRBEvents,
  portlandRapEvents,
  addToFavs,
  favStatus,
  deleteFav,
  favs,
}) => {
  const getEvents = () => {
    let test = Object.keys(seattleRapEvents);
    let arr1 = [];
    const testTwo = test.forEach((event) => {
      arr1.push(seattleRapEvents[event]);
    });
    return arr1;
  };
  const allEventCards = getEvents().map((event) => {
    return (
      <EventCards
        id={event.id}
        name={event.name}
        date={event.dates.start.localDate}
        venue={event._embedded.venues[0].name}
        url={event.url}
        img={event.images[0]}
        key={event.id}
        addToFavs={addToFavs}
        favStatus={favStatus}
        deleteFav={deleteFav}
        favs={favs}
      />
    );
  });

  return <div>{allEventCards}</div>;
};
