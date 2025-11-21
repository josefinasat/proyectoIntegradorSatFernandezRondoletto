let campoBusqueda7 = document.querySelector("form");

campoBusqueda7.addEventListener('submit', function(event){
    event.preventDefault();

    if ( campoBusqueda7.value == "") {
        alert ("No se puede dejar el campo en blanco")
    } else if (campoBusqueda7.length < 3){
        alert ("El termino debe tener al menos 3 letras")
    } else{
        this.submit()
    }
    
})

//aside
let url7 = 'https://dummyjson.com/products/categories';

fetch(url7)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (datos) {
        let lista7 = document.querySelector("#lista-categorias");

        for (let i=0; i < datos.length; i++){
            lista7.innerHTML +=`
                <li>
                    <a href="./category.html?categoria=${datos[i].slug}">${datos[i].name}</a>
                </li>`;
        }
    })
    .catch(function (error) {
        alert("Error al cargar las categorias");
        console.log(error);
    });


//Search Results

let queryString7 = location.search;
let queryStringObj7 = new URLSearchParams (queryString7);
let terminoBuscado = queryStringObj7.get('buscar'); 

let searchProductos = document.querySelector(".searchr");
let searchTitulo = document.querySelector(".titulosearch");

let urlSearch = `https://dummyjson.com/products/search?q=${terminoBuscado}`
fetch(urlSearch)
.then(function (busqueda) {
    return busqueda.json()
})

.then(function (data) {
    let productos = data.products;
    let productosHtml = "";
    if (productos.length ===0){
        searchTitulo.innerHTML = `<h1> No hay resultados para el término: ${terminoBuscado}</h1>`
    } else {
        searchTitulo.innerHTML = `<h1>Resultados de búsqueda para: ${terminoBuscado}</h1>`
        for (let i = 0; i < productos.length; i++) {
            productosHtml += `
        <article class="productos">
          <p class="precio">$${productos[i].price}</p>
          <div class="medio">
            <div><img class="imagenes" src="${productos[i].thumbnail}" alt="${productos[i].title}"></div>
          </div>
          <h3 class="nombre">${productos[i].title}</h3>
          <p class="descripcion">${productos[i].description}</p>
          <a class="details" href="product.html?id=${productos[i].id}">See details</a>
        </article>`;
        }
        searchProductos.innerHTML =  productosHtml;
    }

})

.catch(function (error) {
    console.log(error);
})

