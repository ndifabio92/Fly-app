import { gql } from "@apollo/client";
export const ALL_ORIGINS = gql`
    query allOrigins {
        allOrigins {
            _id
            origin
        }
    }
`;