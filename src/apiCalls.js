export const fetchRapData = (cityId) => {
    return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationId=KnvZfZ7vAv1&dmaId=${cityId}&apikey=RdUo6tjbk6yRqYpxV6mSAOXBA9wnvZ3S`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}`)
      }
        return response.json()
    });
};

export const fetchRBData = (cityId) => {
  return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationId=KnvZfZ7vAee&dmaId=${cityId}&apikey=RdUo6tjbk6yRqYpxV6mSAOXBA9wnvZ3S`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status}`)
    }
      return response.json()
  });
};


