import PropTypes from "prop-types"
import React from "react";
import EventCards from "../EventCards/EventCards";
import "./EventsContainer.css"

export const EventsContainer = ({
  seattleRapEvents,
  seattleRBEvents,
  portlandRBEvents,
  portlandRapEvents,
  addToFavs,
  favStatus,
  deleteFav,
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
        city={event._embedded.venues[0].city.name}
        state={event._embedded.venues[0].state.stateCode}
        url={event.url}
        image={event.images[0].url}
        key={event.id}
        addToFavs={addToFavs}
        favStatus={favStatus}
        deleteFav={deleteFav}
      />
    );
  });

  return <section className="events-container">{allEventCards}</section>;
};

EventsContainer.propTypes = {
  addToFavs: PropTypes.func.isRequired,
  deleteFav: PropTypes.func.isRequired,
  portlandRBEvents: PropTypes.array,
  portlandRapEvents: PropTypes.array,
  seattleRBEvents: PropTypes.array,
  seattleRapEvents: PropTypes.array
}

