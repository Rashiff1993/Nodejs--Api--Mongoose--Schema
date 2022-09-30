const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
       enum: ['Admin','Guest'],
        default: 'Guest'
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('user',userSchema);
module.exports = User