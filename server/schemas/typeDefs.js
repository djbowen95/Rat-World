const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Rat {
        _id: ID
        name: String!
        createdAt: String
        fedAt: String
        lastFed: String
        headIndex: Int
        bodyIndex: Int
        bumIndex: Int
        job: Jobs
        attendedWork: String
        rattributes: [String]
        mazeSolving: Int
        speed: Int
        trapAvoidance: Int
        magic: Int
    }

    type User{
        _id: ID!
        name: String!
        email: String!
        password: String!
        money: Int!
        friends: [String]
        inventory: [ShopItem]
    }

    type ShopItem {
        _id: ID!
        itemName: String!
        image: String!
        description: String!
        price: Int
    }

    type Jobs {
        _id: ID!
        jobName: String!
        image: String!
        description: String!
        wages: Int
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
        shopItem(_id: ID!): ShopItem
        jobs: [Jobs]
    }

    type Mutation {
        register(name: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addFriend(userID: String!, friendID: String!): User
        createRat(name: String!, headIndex: Int, bodyIndex: Int, bumIndex: Int): Rat
        createShopItem(itemName: String!, image: String!, description: String!, price: Int!): ShopItem
        getJob(jobName: String!, image: String!, description: String!, wages: Int! ): Jobs
        buyItem(userID: String!, itemID: String!): User
        applyForJob(ratId: String!, jobId: String!): Rat
        attendWork(ratId: String!, userId: String!): Rat
        feedRat(ratId: String!): Rat
    }
`;

module.exports = typeDefs;