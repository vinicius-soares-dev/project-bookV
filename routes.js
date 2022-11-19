const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const cadastredController = require('./src/controllers/cadastredController');
const loginController = require('./src/controllers/loginController');
const contactsController = require('./src/controllers/contactsController');

route.get('/', homeController.Home);

route.post('/cadastred', cadastredController.Cadastro);


route.get('/login', loginController.Login);

route.post('/contacts', contactsController.Contacts);


module.exports = route;