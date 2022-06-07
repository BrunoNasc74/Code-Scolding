// Function Valida E-mail
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Evento de submit do form
document.getElementById("form").addEventListener("submit", function(e) {

    const email = document.getElementById("email").value;
    const emailError = document.getElementById("email")

    const validaEmail = validateEmail(email);

    if (validaEmail == false && email.length > 0){
        e.preventDefault();
        const errorEmail = document.querySelector('.error-email')
        errorEmail.textContent = 'Digite um e-mail válido!'
        emailError.style.border = '2px solid red'
    }
    
    //Valida senha
    const password = document.getElementById("password")
    const confirmPassword = document.getElementById("confirm_password");
    const errorSenha = document.querySelector('.error-senha')
    
    if(password.value != confirmPassword.value) {
        errorSenha.textContent = 'Senhas diferentes!'
        password.style.border = '2px solid red'
        confirmPassword.style.border = '2px solid red'
    }

    const hasError = validadeFields();

    if (hasError) {
        e.preventDefault();
    }
})
//Valida campos não preenchidos
function validadeFields(){
    const fields = document.querySelectorAll('input');
    const erro = document.querySelector('.error');
    let hasError = false;
    
    for(let i = 0; i < fields.length; i++) {
        
        if(fields[i].value.length <= 0){
            fields[i].style.border = '2px solid red'
            erro.textContent = 'Preencha os campos necessários!'
            hasError = true;
        } 
    }

    return hasError;
}