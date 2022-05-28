const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Rat {
        _id: ID!
        name: String!
        createdAt: String
    }

    type Query {
        rats: [Rat]
      }

    type Mutation {
        createRat(name: String!): Rat
    }
`;



// below is an example of what goes between the `` above
// type Tech {
//     _id: ID!
//     name: String!
//   }

//   type Matchup {
//     _id: ID!
//     tech1: String!
//     tech2: String!
//     tech1_votes: Int
//     tech2_votes: Int
//   }

//   type Query {
//     tech: [Tech]
//     matchups(_id: String): [Matchup]
//   }

//   type Mutation {
//     createMatchup(tech1: String!, tech2: String!): Matchup
//     createVote(_id: String!, techNum: Int!): Matchup
//   }

module.exports = typeDefs;