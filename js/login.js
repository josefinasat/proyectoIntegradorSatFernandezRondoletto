let form = document.querySelector("form");
let email = document.querySelector("#email");
let password = document.querySelector("#contraseña")

form.addEventListener("submit", function(){
    if (email.value === ""){
        alert("El email es obligatorio");
        return;
    }
    if (password.value === "") {
        alert("La contraseña es obligatoria")
        return;
    }
})