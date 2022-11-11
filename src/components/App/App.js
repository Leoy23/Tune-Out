import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { LandingPage } from "../LandingPage/LandingPage";
import { EventsContainer } from "../EventsContainer/EventsContainer";
import { Favorites } from "../FavoritesContainer/FavoritesContainer";
import { NavBar } from "../NavBar/NavBar"
import { fetchRapData, fetchRBData } from "../../apiCalls";
import './App.css';


const App = () => {

  const [seattleRapEvents, setSeattleRapEvents] = useState([])
  const [seattleRBEvents, setSeattleRBEvents] = useState([])
  const [portlandRapEvents, setPortlandRapEvents] = useState([])
  const [portlandRBEvents, setPortlandRBEvents] = useState([])
  const [error, setError] = useState('')
  const [favStatus, setFavStatus] = useState(false)

  useEffect(() =>  {
    const getPromises = () => {
      let seattleRapEvents = fetchRapData(385)
      let seattleRBEvents = fetchRBData(385)
      let portlandRapEvents = fetchRapData(362)
      let portlandRBEvents = fetchRBData(362)
      Promise.all([seattleRBEvents, seattleRapEvents, portlandRBEvents, portlandRapEvents])
        .then(data => {
          setSeattleRBEvents(data[0]._embedded.events)
          setSeattleRapEvents(data[1]._embedded.events)
          setPortlandRBEvents(data[2]._embedded.events)
          setPortlandRapEvents(data[3]._embedded.events)
          setFavStatus(false)
        })
        .catch(() => {
          setError(error)
        })
    }
    getPromises();
  }, [error])

  return (
    <main className="home-page">
      {error ? <h2 className="error-msg">{error}</h2> : 
      <Switch>
        <Route exact path="/" component={() => <LandingPage />}></Route>
        <Route exact path="/home-page">
          <NavBar />
          <EventsContainer 
            seattleRapEvents={seattleRapEvents} 
            seattleRBEvents={seattleRBEvents} 
            portlandRapEvents={portlandRapEvents} 
            portlandRBEvents={portlandRBEvents}
            // favStatus={favStatus} 
          />
        </Route>
        {/* <Route path="/favorites">
          <Favorites />
        </Route> */}
      </Switch>}
    </main>

  );
}

export default App;
