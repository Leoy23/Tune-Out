import React, { useState } from "react";
import { Link } from "react-router-dom";
import EventCards from "../EventCards/EventCards";

export const EventsContainer = ({
  seattleRapEvents,
  seattleRBEvents,
  portlandRBEvents,
  portlandRapEvents,
  setSeattleRapEvents,
  setSeattleRBEvents,
  setPortlandRapEvents,
  setPortlandRBEvents,
  addToFavs,
  favStatus,
  deleteFav
}) => {


  const getEvents = () => {
    let test = Object.keys(seattleRapEvents);
    let arr1 = [];
    let idArr = []
    const testTwo = test.forEach((event) => {
      arr1.push(seattleRapEvents[event])
      idArr.push(seattleRapEvents[event].id)
    });
    console.log(23, arr1);
    console.log(33, idArr)
    return arr1;
  };
  const allEventCards = getEvents().map((event) => {
    return (
          <EventCards
            id={event.id}
            name={event.name}
            date={event.dates.start.localDate}
            url={event.url}
            img={event.images[0]}
            key={event.id}
            addToFavs={addToFavs}
            favStatus={favStatus}
            deleteFav={deleteFav}
          />
        );
  });

  return <div>{allEventCards}</div>;
};
