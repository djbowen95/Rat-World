const mongoose = require ('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

//user information needed
const userSchema = new Schema({
    email: {
        type: String, 
        lowercase: true, 
        required: [true, "can't be blank"], 
        match: [/\S+@\S+\.\S+/, 'is invalid'], 
        index: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "can't be blank"], 
    },
    name: {
        type: String,
        required:[true]
    },
    friends: [
        { type: Schema.Types.ObjectId, ref: "Users" },
      ],
},{
    // Virtuals enabled for friend count
    toJSON: { virtuals: true,},
    timestamps: true,
});

// Virtual for friend count
userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
  });

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
}

next();
});



const User = mongoose.model('User', userSchema);

module.exports = User;
