let campoBusqueda = document.querySelector(".search");
let inputBusqueda = document.querySelector(".busqueda");

campoBusqueda.addEventListener('submit', function(event){
    event.preventDefault();

    if ( inputBusqueda.value == "") {
        alert ("No se puede dejar el campo en blanco")
    } else if (inputBusqueda.value.length < 3){
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


//log in

let formLogIn = document.querySelector("#iniciarsesion");
let email = document.querySelector("#email");
let password = document.querySelector("#contraseña")

formLogIn.addEventListener("submit", function(event){
    event.preventDefault();
    if (email.value == ""){
        alert("El campo Email es obligatorio, completarlo.");
        return;
    }
    else if (password.value === ""){
        alert("El campo Contraseña es obligatorio, completarlo.")
        return;
    }
    else if (password.value.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres.")
        return;
    }
    else{
        formLogIn.submit()
        let mail = document.querySelector("#mail")
        let mailValue = email.value
        localStorage.setItem("Email del usuario", mailValue)
    }
})