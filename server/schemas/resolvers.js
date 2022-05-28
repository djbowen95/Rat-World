const { Rat } = require("../models");

const resolvers = {
  Query: {
    rats: async () => {
      return Rat.find({});
    },
  },
  Mutation: {
    createRat: async (parent, { name }) => {
      return await Rat.create({ name });
    }
  }
};

module.exports = resolvers;
