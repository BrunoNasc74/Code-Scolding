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

    if (validaEmail == false){
        e.preventDefault()
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

})