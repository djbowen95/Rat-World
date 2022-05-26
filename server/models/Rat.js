const { Schema, model } = require('mongoose');

const ratSchema = new Schema ({
    name: {
        type: String,
        required: true
    }
})

const Rat = model('rat', ratSchema)

module.exports = Rat;