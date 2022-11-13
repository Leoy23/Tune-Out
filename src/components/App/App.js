import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { LandingPage } from "../LandingPage/LandingPage";
import { SingleEvent } from "../SingleEvent/SingleEvent";
import { FavoritesContainer } from "../FavoritesContainer/FavoritesContainer";
import { fetchAllEvents } from "../../apiCalls";
import "./App.css";
import HomePage from "../HomePage/HomePage";

const App = () => {
  const [seattleRapEvents, setSeattleRapEvents] = useState([]);
  const [goToHome, setGoToHome] = useState("");
  const [seattleRBEvents, setSeattleRBEvents] = useState([]);
  const [portlandRapEvents, setPortlandRapEvents] = useState([]);
  const [portlandRBEvents, setPortlandRBEvents] = useState([]);
  const [error, setError] = useState("");
  const [favs, setFavs] = useState([]);
  const [favStatus, setFavStatus] = useState(false);

  useEffect(() => {
    const getPromises = () => {
      let seattleRapEvents = fetchAllEvents("KnvZfZ7vAv1", 385);
      let seattleRBEvents = fetchAllEvents("KnvZfZ7vAee", 385);
      let portlandRapEvents = fetchAllEvents("KnvZfZ7vAv1", 362);
      let portlandRBEvents = fetchAllEvents("KnvZfZ7vAee", 362);
      Promise.all([
        seattleRBEvents,
        seattleRapEvents,
        portlandRBEvents,
        portlandRapEvents,
      ])
        .then((data) => {
          setSeattleRBEvents(data[0]._embedded.events);
          setSeattleRapEvents(data[1]._embedded.events);
          setPortlandRBEvents(data[2]._embedded.events);
          setPortlandRapEvents(data[3]._embedded.events);
        })
        .catch(() => {
          setError(error);
        });
    };
    getPromises();
  }, []);

  const addToFavs = (id, name, date, url, image) => {
    const favEvent = {
      id,
      name,
      date,
      url,
      image,
    };

    const fav = () => {
      if (!favs.some((fav) => fav.id === favEvent.id)) {
        setFavStatus(true);
        setFavs([...favs, favEvent]);
      } else {
        setFavStatus(false);
      }
      // let arr = seattleRapEvents.map((event) => {
      //   return favEvent.id === event.id ? setFavs([...favs, favEvent]) && setFavStatus(true)
      //    : favEvent.id !== event.id && setFavStatus(false)
      //   })
      //   console.log(favs)
      //   console.log(70, favStatus)
      //   return arr;
    };
    fav();
  };

  const deleteFav = (id) => {
    const filteredFavs = favs.filter((fav) => fav.id !== id);
    setFavs(filteredFavs);
    setFavStatus(false);
  };

  return (
    <main className="home-page-container">
      {error ? <h2 className="error-msg">Error</h2> : null}
      <Switch>
        <Route exact path="/" render={() => <LandingPage />}></Route>
        <Route
          path="/home-page"
          render={() => (
            <HomePage
              setGoToHome={setGoToHome}
              favStatus={favStatus}
              setSeattleRapEvents={setSeattleRapEvents}
              setSeattleRBEvents={setSeattleRBEvents}
              setPortlandRapEvents={setPortlandRapEvents}
              setPortlandRBEvents={setPortlandRBEvents}
              seattleRapEvents={seattleRapEvents}
              seattleRBEvents={seattleRBEvents}
              portlandRapEvents={portlandRapEvents}
              portlandRBEvents={portlandRBEvents}
              addToFavs={addToFavs}
              deleteFav={deleteFav}
            />
          )}
        ></Route>
        {/* <Route exact to="/:id" render={({ match }) => {
          return <SingleEvent 
          id={match.params.id}
          />
        }}>
        </Route> */}
        <Route
          to="/favorites"
          render={() => (
            <FavoritesContainer favs={favs} deleteFav={deleteFav} />
          )}
        ></Route>
      </Switch>
    </main>
  );
};

export default App;
