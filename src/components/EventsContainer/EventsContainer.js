import React from "react";
import EventCards from "../EventCards/EventCards";
import "./EventsContainer.css"

export const EventsContainer = (seattleRapEvents) => {
  const getEvents = () => {
    let test = Object.keys(seattleRapEvents);
    let arr1 = [];
    const testTwo = test.forEach((event) => {
      arr1.push(seattleRapEvents[event])
    });
    return arr1;
  };

  const seattleRapCards = getEvents().map((rapEvent, index) => {
    let eventsArr = [];
    rapEvent.forEach((show) => {
        eventsArr.push(show)
    })
  const allEvents = eventsArr.map(eachShow => {
      return (
            <EventCards
              id={eachShow.id}
              img={eachShow.images[0]}
              url={eachShow.url}
              name={eachShow.name}
              date={eachShow.dates.start.localDate}
              key={eachShow.id}
            />
        )
  })
    return allEvents;
  })

  return (
    <div>
        {seattleRapCards}
    </div>
  )
};

