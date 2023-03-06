import { gql } from "@apollo/client";

export const ALL_DESTINATIONS = gql`
    query allDestinations {
        allDestinations {
            _id
            destination
        }
    }
`