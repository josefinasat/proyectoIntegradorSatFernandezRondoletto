let campoBusqueda = document.querySelector("#buscar");
let boton = document.querySelector("#boton");
let formulario = document.querySelector(".search");

formulario.addEventListener("submit", function () {
    
    let termino = campoBusqueda.value.trim();

    if (termino == ""){
        alert("El campo no puede estar vacio");
        return false;
    }

    if (termino.length < 3){
        alert("El termino debe tener al menos 3 caracteres.");
        return false;
    }
})


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
                    <a href="./category.html?categoria=${datos[i]}">${datos[i]}</a>
                </li>`;
        }
    })
    .catch(function (error) {
        alert("Error al cargar las categorias");
        console.log(error);
    });