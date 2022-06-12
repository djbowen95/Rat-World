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
`

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
`


export {QUERY_RATS, QUERY_SHOP, QUERY_JOBS}
