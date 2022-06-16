import { gql } from "@apollo/client";

export const CREATE_RAT = gql`
  mutation createRat($name: String!, $headIndex: Int!, $bodyIndex: Int!) {
    createRat(name: $name, headIndex: $headIndex, bodyIndex: $bodyIndex) {
        _id
    }
  }
`;
