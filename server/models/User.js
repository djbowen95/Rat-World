<<<<<<< HEAD
const mongoose = require ('mongoose');
const bcrypt = require('bcrypt');
=======
const mongoose = require("mongoose");
>>>>>>> main

const Schema = mongoose.Schema;

//user information needed
const userSchema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "can't be blank"],
    },
    name: {
      type: String,
      required: [true],
    },
    friends: [{ type: Schema.Types.ObjectId, ref: "Users" }],
    money: {
      type: Number,
      required: true,
      default: 10
    },
    inventory: [{type: Schema.Types.ObjectId, ref: "shopItem"}]
  },
  {
    // Virtuals enabled for friend count
    toJSON: { virtuals: true },
    timestamps: true,
  }
);

// Virtual for friend count
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

<<<<<<< HEAD
// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
}

next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);
=======
const User = mongoose.model("User", userSchema);
>>>>>>> main

module.exports = User;
