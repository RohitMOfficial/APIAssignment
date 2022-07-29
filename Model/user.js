const mongoose = require('mongoose');


const user = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        last_name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true
        }
    },
    { timestamps: true }
);

// virtual field


module.exports = mongoose.model('usersdata', user);