// Function Valida E-mail
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Function Valida RG
function validateRg(rg) {
    var re = /(^\d{1,2}).?(\d{3}).?(\d{3})-?(\d{1}|X|x$)/;
    return re.test(rg);
}

// Evento de submit do form
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault()
    limparErros();
    //Valida E-mail
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("email")

    const validaEmail = validateEmail(email);

    const errorEmail = document.querySelector('.error-email')

    console.log(validaEmail, email.length);

    if (validaEmail == false && email.length > 0){
        errorEmail.textContent = 'Digite um e-mail válido!'
        emailError.style.border = '2px solid red'
    } else {
        errorEmail.textContent = ''
        emailError.style.border = 'none'
    }
    
    //Valida senha
    const password = document.getElementById("password")
    const confirmPassword = document.getElementById("confirm_password");
    const errorSenha = document.querySelector('.error-senha')
    
    if(password.value != confirmPassword.value) {
        errorSenha.textContent = 'Senhas diferentes!'
        password.style.border = '2px solid red'
        confirmPassword.style.border = '2px solid red'
    } else{
        errorSenha.textContent = ''
        password.style.border = 'none'
        confirmPassword.style.border = 'none'
    }

    //Valida RG
    const rg = document.getElementById("rg").value;
    const errorRg = document.getElementById("rg");
    const validaRg = validateRg(rg);
    const rgError = document.querySelector(".error-rg")

    if (validaRg == false && rg.length > 0){
        rgError.textContent = 'Digite um RG válido!'
        errorRg.style.border = '2px solid red'
    } else {
        rgError.textContent = ''
        errorRg.style.border = 'none'
    }
    
    const hasError = validadeFields();
    const success = document.querySelector(".success")

    if (!hasError && validaEmail && password.value === confirmPassword.value && validaRg) {
        success.textContent = 'Cadastro realizado com sucesso!'
        success.style.color = '#38ce36!important'
        limparForm()
    }

})

//Valida campos não preenchidos
function validadeFields(){
    const fields = document.querySelectorAll('input:not(#complemento)');
    const erro = document.querySelector('.error');
    let hasError = false;
    
    for(let i = 0; i < fields.length; i++) {
        
        if(fields[i].value.length <= 0){
            fields[i].style.border = '2px solid red'
            erro.textContent = 'Preencha os campos obrigatórios!'
            hasError = true;
        } 
    }

    return hasError;
}

function limparForm(){
    const inputs = document.querySelectorAll('input');

    for(let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}

function limparErros() {
    const inputs = document.querySelectorAll('input:not(#cep)');

    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].value.length > 0) {
            inputs[i].style.border = 'none';
            if (inputs[i].parentElement.querySelector('span')) {
                inputs[i].parentElement.querySelector('span').textContent = '';
            }
        }
    }
}