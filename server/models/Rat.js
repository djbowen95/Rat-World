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
  job: {
    type: Schema.Types.ObjectId, 
    ref: "jobs"
  }
});

// This virtual didn't work, so Kenny suggested I do this in the resolver instead.
// I've left it in as I would like to build it eventually - ie. after submission.
// ratSchema.virtual("lastFed").get(() => {
//   const fedAt = this.fedAt;
//   const timePassed = (fedAt.getTime() - Date.now()) / 1000;
//   const difference = (60 * 60);
//   return "This is a test"; 
// });

const Rat = model("rat", ratSchema);

module.exports = Rat;
