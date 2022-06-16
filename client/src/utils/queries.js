import { gql } from "@apollo/client";

const QUERY_RATS = gql`
  query rats {
    rats {
      _id
      name
      createdAt
    }
  }
`;

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

export {
  QUERY_RATS,
  QUERY_SHOP,
  QUERY_JOBS,
  QUERY_MONEY,
  QUERY_INVENTORY,
  QUERY_ITEM,
  QUERY_USER,
};
