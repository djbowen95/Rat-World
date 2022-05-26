const { Rat } = require("../models");

const resolvers = {
  Query: {
    rat: async () => {
      return Rat.find({});
    },
  },
};

module.exports = resolvers;
