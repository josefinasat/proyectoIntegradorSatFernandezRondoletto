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


//Search Results

let busqueda = location.search;
let resultadosBusqueda = new URLSearchParams(busqueda);
let busquedaId = resultadosBusqueda.get('quebusco');
console.log(busquedaId);
let resultadosBusq = document.querySelector(".searchr");

fetch(`https://dummyjson.com/products/search?q=${busquedaId}`)
.then(function (busqueda) {
    return busqueda.json()
})

.then (function (data) {
    let titulo = document.querySelector(".titulosearch");
    titulo.innerText = "Search results for: " + busquedaId

    for (let i = 0; i< data.products.length; i++){
        let productos = data.products[i]
        resultadosBusq.innerHTML += `
        <article class="productos">
          <p class="precio">$${productos.price}</p>
          <div class="medio">
            <div><img class="imagenes" src="${productos.thumbnail}" alt="${productos.title}"></div>
          </div>
          <h3 class="nombre">${productos.title}</h3>
          <p class="descripcion">${productos.description}</p>
          <a class="details" href="product.html?id=${productos.id}">See details</a>
        </article>
        `
    }

    if (busqueda == "null"){
        titulo.innerText = "Not results for: " + busquedaId
    }

})

.catch(function (error) {
    console.log(error);
})

