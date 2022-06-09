const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Rat {
        _id: ID
        name: String!
        createdAt: String
    }

    type User{
        _id: ID!
        name: String!
        email: String!
        password: String!
        money: Int!
    }

    type ShopItem {
        _id: ID!
        itemName: String!
        image: String!
        description: String!
        price: Int
    }

    type Auth {
        token: ID!
        user: User
      }

    type Query {
        rats: [Rat]
        users: [User]
        user(_id: ID!): User
        shopItems: [ShopItem]
    }

    type Mutation {
        register(name: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addFriend(userID: String!, friendID: String!): User
        createRat(name: String!): Rat
        createShopItem(itemName: String!, image: String!, description: String!, price: Int!): ShopItem
    }
`;

module.exports = typeDefs;