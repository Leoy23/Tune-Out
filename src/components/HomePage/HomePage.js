import PropTypes from "prop-types"
import React from "react";
import { EventsContainer } from "../EventsContainer/EventsContainer";
import { NavBar } from "../NavBar/NavBar";
import "./HomePage.css"

const HomePage = ({
  favStatus,
  seattleRapEvents,
  seattleRBEvents,
  portlandRBEvents,
  portlandRapEvents,
  addToFavs,
  deleteFav,
}) => {
  return (
    <div className="home">
      <NavBar />
      <EventsContainer
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

HomePage.propTypes = {
  addToFavs: PropTypes.func.isRequired,
  deleteFav: PropTypes.func.isRequired,
  portlandRBEvents: PropTypes.array,
  portlandRapEvents: PropTypes.array,
  seattleRBEvents: PropTypes.array,
  seattleRapEvents: PropTypes.array
}

export default HomePage;
