import { gql } from "@apollo/client";

export const CREATE_RAT = gql`
  mutation createRat($name: String!) {
    createRat(name: $name) {
      user {
        _id
        name
      }
    }
  }
`;
