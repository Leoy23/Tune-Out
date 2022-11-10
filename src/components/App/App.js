import React, { useState, useEffect } from "react"
import { LandingPage } from "../LandingPage/LandingPage";
import { fetchRapData, fetchRBData } from "../../apiCalls";
import './App.css';

const App = () => {

  const [events, setEvents] = useState([])

  const getPromises = () => {
    let seattleRapEvents = fetchRapData(385)
    let seattleRBEvents = fetchRBData(385)
    let portlandRapEvents = fetchRapData(362);
    let portlandRBEvents = fetchRBData(362)
    Promise.all([seattleRBEvents, seattleRapEvents, portlandRBEvents, portlandRapEvents])
    .then(data => {
      console.log("hey", data)
      setEvents(data[0], data[1], data[2], data[3])
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
