const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },

    password: {
        type: Number,
        required: true
    }
});

mongoose.model('usuarios', userSchema);

const users = mongoose.model('usuarios');

module.exports = users;