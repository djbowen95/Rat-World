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

export const REGISTER_USER = gql`
  mutation ($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const BUY_ITEM = gql`
mutation buyItem($userId: String!, $itemId: String! ) {
  buyItem(userID: $userId, itemID: $itemId) {
    inventory {
      _id
    }
  }
}
`;

export const ADD_FRIEND= gql`
mutation AddFriend($userId: String!, $friendId: String!) {
  addFriend(userID: $userId, friendID: $friendId) {
    _id
    email
  }
}
`;

export const JOB_APPLICATION = gql`
mutation jobApplication($ratId: String!, $jobId: String!) {
  applyForJob(ratId: $ratId, jobId: $jobId) {
    _id
  }
}
`;
