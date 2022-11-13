import React from "react";
import { EventsContainer } from "../EventsContainer/EventsContainer";
import { NavBar } from "../NavBar/NavBar";

const HomePage = ({
  favStatus,
  seattleRapEvents,
  seattleRBEvents,
  portlandRBEvents,
  portlandRapEvents,
  setSeattleRapEvents,
  setSeattleRBEvents,
  setPortlandRapEvents,
  setPortlandRBEvents,
  addToFavs,
  deleteFav
}) => {
  console.log(seattleRapEvents);

  return (
    <div className="home">
      <h1>Homepage</h1>
      <NavBar />
      <EventsContainer
        setSeattleRapEvents={setSeattleRapEvents}
        setSeattleRBEvents={setSeattleRBEvents}
        setPortlandRapEvents={setPortlandRapEvents}
        setPortlandRBEvents={setPortlandRBEvents}
        favStatus={favStatus}
        seattleRapEvents={seattleRapEvents}
        seattleRBEvents={seattleRBEvents}
        portlandRapEvents={portlandRapEvents}
        portlandRBEvents={portlandRBEvents}
        addToFavs={addToFavs}
        deleteFav={deleteFav}
      />
    </div>
  );
};

export default HomePage;
