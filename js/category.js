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

//category

let queryString = location.search;
let queryStringObj = new URLSearchParams (queryString);
let categoria = queryStringObj.get("category");

let productosCategory = document.querySelector(".categoryprod");
let titulo = document.querySelector(".skinbody");
titulo.innerText = categoria;


let urlCategory = `https://dummyjson.com/products/category/${categoria}`
fetch(urlCategory)
.then(function (response){
    return response.json()
})

.then (function (data) {
    
    for (let i = 0; i< data.products.length; i++){
        let producto = data.products[i];
        productosCategory.innerHTML += `
        <article class="productos">
            <p class="precio">$${producto.price}</p>
            <div class="medio">
                <img class="imagenes" src="${producto.thumbnail}" alt="${producto.title}">
            </div>
            <h3 class="nombre">${producto.title}</h3>
            <p class="descripcion">${producto.description}</p>
            <a class="details" href="product.html?id=${producto.id}">See details</a>
        </article>`;
    }
})

.catch (function (error) {
    console.log(error);
})
