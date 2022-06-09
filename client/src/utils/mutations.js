import { gql } from '@apollo/client';

export const CREATE_RAT = gql`
  mutation createRat($name: String!) {
    createMatchup(name: $name) {
      _id
      name
    }
  }
`;

export const LOGIN_USER = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;