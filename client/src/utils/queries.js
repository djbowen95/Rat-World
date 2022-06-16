import { gql } from "@apollo/client";

export const QUERY_RATS = gql`
  query rats {
    rats {
      _id
      name
      createdAt
      fedAt
      lastFed
      headIndex
      bodyIndex
      bumIndex
    }
  }
`;
