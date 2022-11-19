const express = require('express');
const app = express();
const port = 7000;
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const mongoose = require('mongoose');

app.use(session({
    secret: "projectbinder",
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

mongoose.connect("mongodb://localhost/cadastros").then(() => {
    console.log('Mongodb conectado');
}).catch((err) => {
    console.log('erro ao se conectar com o mongodb' + err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname)));

app.set('view engine', 'ejs');



app.use(routes);

app.listen(port, () => {
    console.log('Servidor inicializado: http://localhost:7000');
});