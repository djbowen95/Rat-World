import { gql } from '@apollo/client';

export const CREATE_RAT = gql`
  mutation createRat($name: String!) {
    createMatchup(name: $name) {
      _id
      name
    }
  }
`;