// Function Valida E-mail
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Evento de submit do form
document.getElementById("form").addEventListener("submit", function(e) {

    const email = document.getElementById("email").value;

    const validaEmail = validateEmail(email);

    if (validaEmail == false){
        e.preventDefault()
        const errorEmail = document.querySelector('.error-email')
        errorEmail.textContent('Digite um e-mail válido!')
    }
    

})