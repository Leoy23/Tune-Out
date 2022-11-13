import React from "react";
import { EventsContainer } from "../EventsContainer/EventsContainer";
import { NavBar } from "../NavBar/NavBar";

const HomePage = ({
  favStatus,
  seattleRapEvents,
  seattleRBEvents,
  portlandRBEvents,
  portlandRapEvents,
  addToFavs,
  deleteFav,
  favs
}) => {
  console.log(seattleRapEvents);

  return (
    <div className="home">
      <h1>Homepage</h1>
      <NavBar />
      <EventsContainer
        favStatus={favStatus}
        seattleRapEvents={seattleRapEvents}
        seattleRBEvents={seattleRBEvents}
        portlandRapEvents={portlandRapEvents}
        portlandRBEvents={portlandRBEvents}
        addToFavs={addToFavs}
        deleteFav={deleteFav}
        favs={favs}
      />
    </div>
  );
};

export default HomePage;
