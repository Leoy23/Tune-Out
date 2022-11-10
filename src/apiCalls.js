export const fetchAllData = () => {
    return fetch('https://app.ticketmaster.com/discovery/v2/events.json?classificationId=KnvZfZ7vAv1&dmaId=385&apikey=RdUo6tjbk6yRqYpxV6mSAOXBA9wnvZ3S')
    .then(response => {
        console.log(response)
        return response.json()
    });
};