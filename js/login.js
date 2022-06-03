const entrarBtn = document.getElementById("entrarBtn");
const senhaInput = document.getElementById("InputPassword");

entrarBtn.addEventListener("click", function() {
    let email = document.getElementById("emailLogin").value;
    let senha = senhaInput.value;
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
        $("#emailLogin").addClass("is-invalid");
    } else {
        $("#emailLogin").removeClass("is-invalid");
        $("#emailLogin").addClass('is-valid');
    }
    if (senha === "") {
        $("#InputPassword").addClass("is-invalid");
    } else {
        $("#InputPassword").removeClass("is-invalid");
        $("#InputPassword").addClass('is-valid');
    }
});