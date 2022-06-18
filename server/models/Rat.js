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
    ref: "jobs",
  },
  attendedWork: {
    type: Date,
  },
  rattributes: {
    type: [String],
  },
  mazeSolving: {
    type: Number
  },
  speed: {
    type: Number
  },
  trapAvoidance: {
    type: Number
  },
  magic: {
    type: Number
  }
});

const rattributesArray = [
  "evil",
  "moist eyed",
  "speaks mouse",
  "speaks elvish",
  "rabid",
  "shy",
  "passive-aggressive",
  "weak willed",
  "chemical dependency",
  "gay",
  "bi-curious",
  "flamboyant",
  "dark",
  "sanguine",
  "pretty",
  "cute",
  "night owl",
  "nudist",
  "greedy",
  "jealous",
  "pyromaniac",
  "cannibal",
  "nimble",
  "wimp",
  "annoying squeak",
  "very neurotic",
  "restless",
  "murderer",
  "loves mice",
  "cat killer",
  "cat lover",
  "a rat amongst rats",
  "plague spreader",
  "cocaine addiction",
  "button presser",
  "sexual deviant",
  "forgetful",
  "lazy",
  "smart",
  "snappy dresser",
  "talks too much",
  "sneaky",
  "ambivalent towards mice",
  "crazy",
  "loves to cook",
  "overweight",
  "classy",
  "class act",
  "prefers the company of mice",
  "rat about town",
  "hates mice",
  "people pleaser",
  "brave",
  "descended from royalty",
  "beautiful",
  "sarcastic",
  "mistrustful of humans",
  "narcissistic",
  "holier than thou",
  "friend of cats",
];

ratSchema.pre("save", function (next) {
  // Select 5 rattributes at random
  const assignedRattributes = rattributesArray.sort(() => 0.5 - Math.random()).slice(0, 5);
  this.rattributes = assignedRattributes;
  this.mazeSolving = Math.floor(Math.random() * 5) + 1
  this.speed = Math.floor(Math.random() * 5) + 1
  this.trapAvoidance = Math.floor(Math.random() * 5) + 1
  this.magic = Math.floor(Math.random() * 5) + 1
  next();
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
