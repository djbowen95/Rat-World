import { gql } from "@apollo/client";

const QUERY_RATS = gql`
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
      job {
        _id
        jobName
        wages
      }
      attendedWork
      rattributes
      mazeSolving
      speed
      trapAvoidance
      magic
    }
  }
`;

const QUERY_USERS_RATS = gql`
query userRats ($id: ID!) {
  user(_id: $id) {
    _id
    name
    rats {
      _id
      name
      createdAt
      fedAt
      lastFed
      headIndex
      bodyIndex
      bumIndex
      job {
        _id
        jobName
      }
      attendedWork
      rattributes
      mazeSolving
      speed
      trapAvoidance
      magic
    }
  }
}
`

const QUERY_SHOP = gql`
  query shopItems {
    shopItems {
      _id
      itemName
      image
      description
      price
    }
  }
`;

const QUERY_JOBS = gql`
  query jobs {
    jobs {
      _id
      jobName
      image
      description
      wages
    }
  }
`;

const QUERY_MONEY = gql`
  query userMoney($id: ID!) {
    user(_id: $id) {
      money
    }
  }
`;

const QUERY_INVENTORY = gql`
  query getInventory($id: ID!) {
    user(_id: $id) {
      inventory {
        itemName
        image
        description
      }
    }
  }
`;

const QUERY_ITEM = gql`
  query getSingleItem($id: ID!) {
    shopItem(_id: $id) {
      itemName
      image
      description
    }
  }
`;

const QUERY_USER = gql`
query Users {
  users {
    email
    _id
    
  }
}
`;

// const QUERY_ONLY_ME = gql`
// query User($id: ID!) {
//   user(_id: $id) {
//     _id
//     name
//     email
//     friends
//   }
// }
// ;`

const QUERY_RATNAMES = gql`
  query {
    rats {
      _id
      name
      job {
        _id
      }
    }
  }
`;

export {
  QUERY_RATS,
  QUERY_SHOP,
  QUERY_JOBS,
  QUERY_MONEY,
  QUERY_INVENTORY,
  QUERY_ITEM,
  QUERY_USER,
  QUERY_RATNAMES,
  QUERY_USERS_RATS
};
