const { Collection } = require('mongoose');
const contact = require('../models/contactsModel');


exports.Contacts = (req, res) => {
    const nameContact = req.body.firstname;
    const sobrenomeContact = req.body.lastname;
    const emailContact = req.body.emailcontact;
    const telContact = req.body.telcontact;

    if(!nameContact) {
        res.send('Digite um nome válido');
        return;
    }

    if(nameContact.length < 2) {
        res.send('Seu nome deve conter 3 ou mais caracteres');
        return;
    }

    if(!sobrenomeContact) {
        res.send('Digite um sobrenome válido');
        return;
    }

    if(sobrenomeContact.length < 2) {
        res.send('Seu sobrenome deve conter 3 ou mais caracteres');
        return;
    }

    if(emailContact.includes('@') == false || emailContact.includes('.com') == false){
        res.send('Digite um e-mail válido');
        return;
    }

    if(!telContact) {
        res.send('Digite um número de telefone');
        return;
    }

    if(telContact.length < 11) {
        res.send('O número de telefone deve conter 11 digitos');
        return;
    }

    new contact({
        nome: req.body.firstname,
        sobrenome: req.body.lastname,
        email: req.body.emailcontact,
        telefone: req.body.telcontact
    }).save()
        contact.find().then((contact) => {
        res.render('contact', {contatos: contact});
        }).catch((err) => {
        console.log('erro' + err);
        res.send('erro ao carregar contatos');
        });

};