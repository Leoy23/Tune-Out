export const fetchAllData = (eventId, cityId) => {
    return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationId=${eventId}&dmaId=${cityId}&apikey=RdUo6tjbk6yRqYpxV6mSAOXBA9wnvZ3S`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}`)
      }
      console.log(response)
        return response.json()
    });
};
