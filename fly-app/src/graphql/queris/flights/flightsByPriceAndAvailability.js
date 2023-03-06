import { gql } from "@apollo/client";

export const FLIGHTS_BY_PRICE_AND_AVAILABILITY = gql`
query flightsByPriceAndAvailability(
    $origin: String!
    $destination: String!,
    $price: String!, 
    $availability: Int!,
    $limit: Int!
    ) {
        flightsByPriceAndAvailability(
        origin: $origin,
        destination: $destination,
        price: $price,
        availability: $availability
        limit: $limit
        ) {
        _id
        origin {
            _id
            origin
        }
        destination {
            _id
            destination
        }
        price
        availability
        data
    }
}
`;