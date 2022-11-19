const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },

    sobrenome: {
        type: String,
        required: true
    },

    email: {
        type: String,
    },

    telefone: {
        type: Number,
        required: true
    }
});

mongoose.model('contatos', contactSchema);

const contacts = mongoose.model('contatos');

module.exports = contacts;