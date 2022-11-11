import React from "react";
import EventCards from "../EventCards/EventCards";

export const EventsContainer = (seattleRapEvents) => {
  const getEvents = () => {
    let test = Object.keys(seattleRapEvents);
    let arr1 = [];
    const testTwo = test.forEach((event) => {
      arr1.push(seattleRapEvents[event])
    });
    return arr1;
  };

  const newFunc = () => {
    let arr2 = []
    getEvents().forEach((data) => {
        arr2.push(data)
    })
    return arr2;
  }

  const seattleRapCards = getEvents().map((rapEvent, index) => {
    let newRapEvent = [];
    rapEvent.forEach((show) => {
        newRapEvent.push(show)
    })
    const seattleRap = newRapEvent.map(eachShow => {
        console.log(eachShow._embedded.venues[0])
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
    return seattleRap;
  })

  return (
    <div>
        {seattleRapCards}
    </div>
  )
};

