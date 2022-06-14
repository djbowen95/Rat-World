const { Schema, model } = require("mongoose");

const ratSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  headIndex: {
    type: Number,
    required: false,
  },
  bodyIndex: {
    type: Number,
    required: false,
  },
  bumIndex: {
    type: Number,
    required: false,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  fedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Rat = model("rat", ratSchema);

module.exports = Rat;
