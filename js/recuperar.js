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

entrarBtn.addEventListener("click", function() {
    let email = document.getElementById("emailLogin").value;
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
        $("#emailLogin").addClass("is-invalid");
        toastr.error('Email inválido')
    } else {
        $("#emailLogin").removeClass("is-invalid");
        $("#emailLogin").addClass("is-valid");
        toastr.success('Email de recuperação enviado com sucesso!')
    }
});