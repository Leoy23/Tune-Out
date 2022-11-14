export const fetchAllEvents = (genreId) => {
  return fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?classificationId=${genreId}&dmaId=385&apikey=APMYJDIjieW7AMcm9ln6ShGpyp0fkGrJ`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    return response.json();
  });
};
