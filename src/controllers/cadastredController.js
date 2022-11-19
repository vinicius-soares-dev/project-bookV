const users = require('../models/cadastredModel');

exports.Cadastro = (req, res) => {
    const emailValue = req.body.emailsign;
    const passwordValue = req.body.passwordsign;

    if(!emailValue || emailValue.includes('@') == false || emailValue.includes('.com') == false) {
        res.send('insira um email válido');
        return;
    }

    if(!passwordValue) {
        res.send('Digite uma senha válida');
        return;
    }

    if(passwordValue.length < 6 || passwordValue.length > 11) {
        res.send('sua senha deve conter entre 6 a 11 caracteres');
        return;
    }


    new users({
        email: req.body.emailsign,
        password: req.body.passwordsign
    }).save().then(() => {
        res.render('initial');
    }).catch((err) => {
        console.log('erro ao salvar contato' + err);
    });
};