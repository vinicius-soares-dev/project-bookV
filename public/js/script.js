const btn = document.querySelector('.btn');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const divError = document.querySelector('.error');
const errorMsg = document.querySelector('.error-msg');


btn.addEventListener('click', (event) => {
    event.preventDefault();

    validationForm();
})

function validationForm() {
    const emailValue = email.value;
    const passwordValue = password.value;

    if(emailValue === '' || passwordValue === '') {
        errorMsg.textContent = 'Por favor preencha todos os campos vazios';
        return
    }

    if(emailValue.includes('@') == false || emailValue.includes('.com') == false) {
        errorMsg.textContent = 'e-mail inválido';
        return;
    }

    if(passwordValue.length < 6) {
        errorMsg.textContent = 'Sua senha deve conter 6 ou mais caracteres';
        return;
    }

    
    divError.style.display = 'none';
    return;
}