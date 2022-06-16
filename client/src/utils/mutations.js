import { gql } from "@apollo/client";

export const CREATE_RAT = gql`
  mutation createRat($name: String!, $headIndex: Int!, $bodyIndex: Int!, $bumIndex: Int!) {
    createRat(name: $name, headIndex: $headIndex, bodyIndex: $bodyIndex, bumIndex: $bumIndex) {
        _id
    }
  }
`;
