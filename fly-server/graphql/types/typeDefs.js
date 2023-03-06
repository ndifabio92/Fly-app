const typeDefs = `
    type Origin {
        _id: String
        origin: String
    }

    type Destination {
        _id: String
        destination: String
    }

    type Flight {
        _id: String
        origin: Origin!
        destination: Destination!
        data: String
        price: String
        availability: Int
    }

    type Query {
        flightsCount: Int!
        allFlights: [Flight]!
        allOrigins: [Origin]!
        allDestinations: [Destination]!
        flightsByPriceAndAvailability(origin: String!, destination: String!, price: String!, availability: Int!, limit: Int!): [Flight]!
    }
`

export default typeDefs;