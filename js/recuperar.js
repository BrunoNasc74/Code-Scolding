const entrarBtn = document.getElementById("entrarBtn");

entrarBtn.addEventListener("click", function() {
    let email = document.getElementById("emailLogin").value;
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
        $("#emailLogin").addClass("is-invalid");
    } else {
        $("#emailLogin").removeClass("is-invalid");
        $("#emailLogin").addClass('is-valid');
    }
});