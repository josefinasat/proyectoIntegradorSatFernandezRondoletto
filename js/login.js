let campoBusqueda4 = document.querySelector(".search");
let inputBusqueda4 = document.querySelector(".busqueda");

campoBusqueda4.addEventListener('submit', function(event){
    event.preventDefault();

    if ( inputBusqueda4.value == "") {
        alert ("No se puede dejar el campo en blanco")
    } else if (inputBusqueda4.value.length < 3){
        alert ("El termino debe tener al menos 3 letras")
    } else{
        this.submit()
    }
    
})

//aside
let url4 = 'https://dummyjson.com/products/categories';

fetch(url4)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (datos) {
        let lista4 = document.querySelector("#lista-categorias");

        for (let i=0; i < datos.length; i++){
            lista4.innerHTML +=`
                <li>
                    <a href="./category.html?categoria=${datos[i]}">${datos[i].name}
                </li>`;
        }
    })
    .catch(function (error) {
        console.log(error)
        alert("Error al cargar las categorias");
    });


//log in

let formLogIn = document.querySelector("#iniciarsesion");
let email = document.querySelector("#emailusuario");
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
        let mailValue = email.value
        localStorage.setItem("Email del usuario", mailValue)
    }
})