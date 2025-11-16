
let form = document.querySelector("form");
let email = document.querySelector("#email");
let password= document.querySelector("#contraseña");
let repetir = document.querySelector("#repetir")
let terminos = document.querySelector("#terminos");

form.addEventListener("submit", function(){
    if (email.value === ""){
        alert("El email es obligatorio");
        return;
    }

    if (password.value === ""){
        alert("La contraseña es obligatoria");
        return;
    }

    if (repetir.value === ""){
        alert("debes repetir la contraseña");
        return;
    }

    if (password.value !== repetir.value){
        alert("Las contraseña no coinciden");
        return;
    }

    if (!terminos.value === ""){
        alert("Debes aceotar los terminos y condiciones");
        return;
    }
    
});


// falta centrar la pagina jorizontal y vertical y en el login tmb