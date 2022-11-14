export const fetchAllEvents = (genreId) => {
    return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationId=${genreId}&dmaId=385&apikey=RdUo6tjbk6yRqYpxV6mSAOXBA9wnvZ3S`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}`)
      }
        return response.json();
    });
};




