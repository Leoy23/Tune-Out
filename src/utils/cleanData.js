
const cleanData = (data) => {
    return {
        artistName: data.name,
        date: data.dates.start.localDate.split('-').join('/'),
        venue: data._embedded.venues[0].name,
        city: data._embedded.venues[0].city.name,
        state: data._embedded.venues[0].state.stateCode,
        address: {
            street: data._embedded.venues[0].address.line1,
            country: data._embedded.venues[0].country.countryCode,
        },
        accessibleSeatingInfo: data._embedded.venues[0].accessibleSeatingDetails,
        venueImage: data._embedded.venues[0].images[0].url 
    }
}

export default cleanData;