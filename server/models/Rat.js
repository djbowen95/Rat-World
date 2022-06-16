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

ratSchema.virtual("lastFed").get(() => {
  const fedAt = this.fedAt;
  const timePassed = (fedAt.getTime() - Date.now()) / 1000;
  const difference = (60 * 60);
  return timePassed; 
});
//   function diff_hours(date) 
//  {

//   let diff =(date.getTime() - Date.now()) / 1000;
//   diff /= (60 * 60);
//   return Math.abs(Math.round(diff));
  
//  }

// date = new Date("May 31, 2022 11:49:00");
// console.log(diff_hours(date));
//   if (!this.reactions) {
//       return 0;
//   }
//   return this.reactions.length;


const Rat = model("rat", ratSchema);

module.exports = Rat;
