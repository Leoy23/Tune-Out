import React, { useState, useEffect } from "react"
import { LandingPage } from "../LandingPage/LandingPage";
import { fetchAllData } from "../../apiCalls";
import './App.css';

const App = () => {

  const [events, setEvents] = useState('')

  const makePromises = () => {
      let seattleRapData = fetchAllData('KnvZfZ7vAv1', 385);
      let seattleRBData = fetchAllData('KnvZfZ7vAee', 385);
      let portlandRapData = fetchAllData('KnvZfZ7vAv1', 362);
      let portlandRBData = fetchAllData('KnvZfZ7vAee', 362);
      let vancouverRapData = fetchAllData('KnvZfZ7vAv1', 528);
      let vancouverRBData = fetchAllData('KnvZfZ7vAee', 528);
      Promise.all([seattleRBData, seattleRapData, portlandRBData, portlandRapData, vancouverRBData, vancouverRapData])
      .then(data => setEvents(data))
  }

  useEffect(() =>  {
    makePromises();
  }, [])

  return (
   <LandingPage />
  );
}

export default App;
