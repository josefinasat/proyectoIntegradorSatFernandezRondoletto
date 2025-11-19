let campoBusqueda2 = document.querySelector(".search");
let inputBusqueda2 = document.querySelector(".busqueda");

campoBusqueda2.addEventListener('submit', function(event){
    event.preventDefault();

    if ( inputBusqueda2.value == "") {
        alert ("No se puede dejar el campo en blanco")
    } else if (inputBusqueda2.value.length < 3){
        alert ("El termino debe tener al menos 3 letras")
    } else{
        this.submit()
    }
    
})

//aside
let url2 = 'https://dummyjson.com/products/categories';

fetch(url2)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (datos) {
        let lista2 = document.querySelector("#lista-categorias");

        for (let i=0; i < datos.length; i++){
            lista2.innerHTML +=`
                <li>
                    <a href="./category.html?categoria=${datos[i]}">${datos[i].name}</a>
                </li>`;
        }
    })
    .catch(function (error) {
        alert("Error al cargar las categorias");
    });

    // LOGOUT
let botonlogout1 = document.querySelector("#botonlogout1");
let login = document.querySelector(".login");
let register = document.querySelector(".register");
let bienvenida = document.querySelector("#bienvenida");
botonlogout1.addEventListener("click",function(evento){
    evento.preventDefault();
    localStorage.removeItem ("Email del usuario");
    login.style.display = "block";
    register.style.display = "none";
    window.location.reload();
})
