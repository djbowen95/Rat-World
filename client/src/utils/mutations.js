import { gql } from "@apollo/client";

export const CREATE_RAT = gql`
  mutation createRat($name: String!) {
    createRat(name: $name) {
      token
      user {
        _id
        name
      }
    }
  }
`;
