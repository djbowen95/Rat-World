const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Rat {
        _id: ID
        name: String!
        createdAt: String
        fedAt: String
        headIndex: Int
        bodyIndex: Int
        bumIndex: Int
    }

    type User{
        _id: ID!
        name: String!
        email: String!
        password: String!
        money: Int!
    }

    type Auth {
        token: ID!
        user: User
      }

    type Query {
        rats: [Rat]
        users: [User]
        user(_id: ID!): User
    }

    type Mutation {
        register(name: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addFriend(userID: String!, friendID: String!): User
        createRat(name: String!, headIndex: Int, bodyIndex: Int, bumIndex: Int): Rat
    }
`;

module.exports = typeDefs;