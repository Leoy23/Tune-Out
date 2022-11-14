import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { LandingPage } from "../LandingPage/LandingPage";
import { FavoritesContainer } from "../FavoritesContainer/FavoritesContainer";
import { fetchAllEvents } from "../../utils/apiCalls";
import Status404 from "../errorHandling/Status404";
import InternalServerError from "../errorHandling/InternalServerError";
import "./App.css";
import HomePage from "../HomePage/HomePage";

const App = () => {
  const [seattleRapEvents, setSeattleRapEvents] = useState([]);
  const [seattleRBEvents, setSeattleRBEvents] = useState([]);
  const [error, setError] = useState("");
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const getAllEvents = () => {
      let seattleRapEvents = fetchAllEvents("KnvZfZ7vAv1");
      let seattleRBEvents = fetchAllEvents("KnvZfZ7vAee");
      Promise.all([
        seattleRBEvents,
        seattleRapEvents,
      ])
        .then((data) => {
          setSeattleRBEvents(data[0]._embedded.events);
          setSeattleRapEvents(data[1]._embedded.events);
        })
        .catch(() => {
          setError(error);
        });
    };
    getAllEvents();
  }, []);

  const addToFavs = (id, name, date, url) => {
    const favEvent = {
      id,
      name,
      date,
      url,
    };

    const filtered = favs.filter((f) => f.id !== favEvent.id);
    favs.length ? setFavs([...filtered, favEvent]) : setFavs([favEvent]);
  };

  const deleteFav = (id) => {
    const filteredFavs = favs.filter((fav) => fav.id !== id);
    setFavs(filteredFavs);
  };

  return (
    <main className="home-page-container">
      {error ? <h2 className="error-msg">Error</h2> : null}
      <Switch>
        <Route
          exact
          path="/home-page"
          render={() => (
            <HomePage
              seattleRapEvents={seattleRapEvents}
              seattleRBEvents={seattleRBEvents}
              addToFavs={addToFavs}
              deleteFav={deleteFav}
            />
          )}
        ></Route>
        <Route
          exact
          path="/favorites"
          render={() => (
            <FavoritesContainer favs={favs} deleteFav={deleteFav} />
          )}
        ></Route>
        <Route exact path="/" render={() => <LandingPage />}></Route>
        <Route component={Status404} />
        <Route component={InternalServerError} />
      </Switch>
    </main>
  );
};

export default App;
