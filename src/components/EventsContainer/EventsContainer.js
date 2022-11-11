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
    const allEvents = arr1.map((rapEvent) => {
      let eventsArr1 = []
      rapEvent.forEach((show) => {
        eventsArr1.push(show)
      })
      return eventsArr1;
    })
    const eventCards = allEvents.map(eachShow => {
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
    return eventCards;
  };

  return (
    <div>
        {getEvents()}
    </div>
  )
};

