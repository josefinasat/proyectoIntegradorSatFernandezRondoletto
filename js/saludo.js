let campoBusqueda1 = document.querySelector(".search");
let inputBusqueda1 = document.querySelector(".busqueda");

campoBusqueda1.addEventListener('submit', function(event){
    event.preventDefault();

    if ( inputBusqueda1.value == "") {
        alert ("No se puede dejar el campo en blanco")
    } else if (inputBusqueda1.value.length < 3){
        alert ("El termino debe tener al menos 3 letras")
    } else{
        this.submit()
    }
    
})

//aside
let url1 = 'https://dummyjson.com/products/categories';

fetch(url1)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (datos) {
        let lista1 = document.querySelector("#lista-categorias");

        for (let i=0; i < datos.length; i++){
            lista1.innerHTML +=`
                <li>
                    <a href="./category.html?categoria=${datos[i]}">${datos[i].name}</a>
                </li>`;
        }
    })
    .catch(function (error) {
        alert("Error al cargar las categorias");
    });


//saludo
    let emailUsuario = localStorage.getItem("Email del usuario");
    if (emailUsuario){
        let bienvenida_lista = document.querySelector("#bienvenida")
        bienvenida_lista.innerHTML += `Bienvenido ${emailUsuario}`
        let loginocultar = document.querySelector(".login")
        loginocultar.style.display = "none"
        let registerocultar = document.querySelector(".register")
        registerocultar.style.display = "none"
        let barranavegacion = document.querySelector("#listacreadora")
        barranavegacion.innerHTML += `<p id="botonlogout1" class="logregister"> Log Out </p>`
    }
