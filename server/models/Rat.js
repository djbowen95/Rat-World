const { Schema, model } = require("mongoose");

const ratSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Rat = model("rat", ratSchema);

module.exports = Rat;
