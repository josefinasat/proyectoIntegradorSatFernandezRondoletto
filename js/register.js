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
let form = document.querySelector("#registerForm");
let email = document.querySelector("#email");
let password= document.querySelector("#contraseña");
let repetir = document.querySelector("#repetir")

form.addEventListener("submit", function(event){
    event.preventDefault();
    if (email.value === ""){
        alert("El campo Email es obligatorio, completarlo.");
        return;
    }
    else if (password.value === ""){
        alert("El campo Contraseña es obligatorio, completarlo.");
        return;
    }
    else if (password.value.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres.")
        return;
    }
    else if (password.value !== repetir.value){
        alert("Las contraseñas no coinciden, debes repetir la contaseña.");
        return;
    }
    else {
        location.href = "./login.html"
    }
})
