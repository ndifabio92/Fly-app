import Flight from "../../models/Flight.js";
import Origin from "../../models/Origin.js";
import Destination from "../../models/Destination.js";

const resolvers = {
    Query: {
        flightsCount: () => Flight.collection.countDocuments(),

        allFlights: async () => {
            return Flight.find({})
        },
        allOrigins: async () => {
            return Origin.find({}).sort("origin");
        },
        allDestinations: async () => {
            return Destination.find({}).sort("destination");
        },
        flightsByPriceAndAvailability: async (_, { origin, destination, price, availability, limit }) => {
            const objToSearch = {
                origin: origin,
                price: { $lt: price },
                availability: { $gte: availability }
            };
            (destination !== "ALL") && Object.assign(objToSearch, { 'destination': destination });

            return Flight.find(objToSearch)
                .sort({ price: -1 })
                .limit(limit);
        }
    },
    Flight: {
        origin: (root) => {
            return {
                _id: root._id,
                origin: root.origin
            }
        },
        destination: (root) => {
            return {
                _id: root._id,
                destination: root.destination
            }
        }
    }
}

export default resolvers;