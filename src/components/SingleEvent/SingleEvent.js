import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchSingleEvent } from '../../apiCalls';
import './SingleEvent.css'


export const SingleEvent = () => {
    const [singleEvent, setSingleEvent] = useState([])
    const [singleError, setSingleError] = useState("")

    const getSingleData = (id, index) => {
        console.log("Anything here?")
      return fetchSingleEvent(`${id}`)
        .then(data => {
            setSingleEvent(data)
        })
        .catch(error => setSingleError(error))
    }
    console.log(getSingleData())
    useEffect(() => {
      getSingleData();  
    }, [])

  return (
    <section className='singe-event-container'>
      <h1>This is the single page event</h1>
      <Link to="/home-page">
        <button>Back</button>
      </Link>
    </section>
  )
}


