toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-bottom-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}
const entrarBtn = document.getElementById("entrarBtn");
const senhaInput = document.getElementById("InputPassword");

entrarBtn.addEventListener("click", function() {
    let email = document.getElementById("emailLogin").value;
    let senha = senhaInput.value;
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
        $("#emailLogin").addClass("is-invalid");
        toastr.error('Email inválido')
    } else {
        $("#emailLogin").removeClass("is-invalid");
        $("#emailLogin").addClass('is-valid');
    }
    if (senha === "") {
        $("#InputPassword").addClass("is-invalid");
        toastr.error('Senha inválida')
    } else {
        $("#InputPassword").removeClass("is-invalid");
        $("#InputPassword").addClass('is-valid');
    }
});