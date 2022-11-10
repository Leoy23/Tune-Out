import React, { useState, useEffect } from "react"
import { LandingPage } from "../LandingPage/LandingPage";
import { fetchRapData, fetchRBData } from "../../apiCalls";
import './App.css';

const App = () => {

  const [seattleRapEvents, setSeattleRapEvents] = useState([])
  const [seattleRBEvents, setSeattleRBEvents] = useState([])
  const [portlandRapEvents, setPortlandRapEvents] = useState([])
  const [portlandRBEvents, setPortlandRBEvents] = useState([])


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
      })
  }


  useEffect(() =>  {
    getPromises();
  }, [])

  return (
   <LandingPage />
  );
}

export default App;
