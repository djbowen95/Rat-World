const { Rat } = require("../models");

const resolvers = {
  Query: {
    rats: async () => {
      return Rat.find({});
    },
  },
};

module.exports = resolvers;
