let campoBusqueda = document.querySelector("form");

campoBusqueda.addEventListener('submit', function(event){
    event.preventDefault();

    if ( campoBusqueda.value == "") {
        alert ("No se puede dejar el campo en blanco")
    } else if (campoBusqueda.length < 3){
        alert ("El termino debe tener al menos 3 letras")
    } else{
        this.submit()
    }
    
})

//aside
let url = 'https://dummyjson.com/products/categories';

fetch(url)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (datos) {
        let lista = document.querySelector("#lista-categorias");

        for (let i=0; i < datos.length; i++){
            lista.innerHTML +=`
                <li>
                    <a href="./category.html?categoria=${datos[i]}">${datos[i].name}</a>
                </li>`;
        }
    })
    .catch(function (error) {
        alert("Error al cargar las categorias");
        console.log(error);
    });

// register
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