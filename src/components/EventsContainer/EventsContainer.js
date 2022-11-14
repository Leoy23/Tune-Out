import PropTypes from "prop-types"
import React from "react";
import EventCards from "../EventCards/EventCards";
import "./EventsContainer.css"

export const EventsContainer = ({
  seattleRapEvents,
  seattleRBEvents,
  addToFavs,
  favStatus,
  deleteFav,
}) => {

  const getRapEvents = () => {
    let test = Object.keys(seattleRapEvents);
    let arr1 = [];
    const testTwo = test.forEach((event) => {
      arr1.push(seattleRapEvents[event]);
    });
    return arr1;
  };
  const allRapEvents = getRapEvents().map((event) => {
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

  const getRBEvents = () => {
    let test = Object.keys(seattleRBEvents);
    let arr1 = [];
    const testTwo = test.forEach((event) => {
      arr1.push(seattleRBEvents[event]);
    });
    return arr1;
  };
  const allRBEvents = getRBEvents().map((event) => {
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

  return (
  <section className="events-container">
    {allRapEvents}
    {allRBEvents}
    </section>
    )
};

EventsContainer.propTypes = {
  addToFavs: PropTypes.func.isRequired,
  deleteFav: PropTypes.func.isRequired,
  portlandRBEvents: PropTypes.array,
  portlandRapEvents: PropTypes.array,
  seattleRBEvents: PropTypes.array,
  seattleRapEvents: PropTypes.array
}

