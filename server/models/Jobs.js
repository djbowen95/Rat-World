const { Schema, model } = require("mongoose");

const jobSchema = new Schema(
  {
    jobName: {
      type: String,
      required: true,
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    wages: {
        type: Number,
        required: true
    }
  },
  {
    timestamps: true,
  }
);

const Jobs = model("jobs", jobSchema);

module.exports = Jobs;