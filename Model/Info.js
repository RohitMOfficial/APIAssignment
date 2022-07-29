const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
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
        },
        password: {
            type:String,
            trim:true,
            required:true,
        }
    },
    { timestamps: true }
);

// virtual field


module.exports = mongoose.model('userdetails', userSchema);