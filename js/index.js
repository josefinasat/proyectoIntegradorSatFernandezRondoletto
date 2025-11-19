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


    // productos

let beautyContainer = document.querySelector("#beautycontainer");
let skincareContainer = document.querySelector("#skincarecontainer");

let urlProductos =  "https://dummyjson.com/products";

fetch (urlProductos)
    .then(function(response){
        return response.json();
    })

    .then(function(data){

        let productos = data.products;

        let bestSellers = [];
        for (let i = 0; i < 10; i++){
            bestSellers.push(productos[i]);
        }

        let randomProducts = [];
        for (let i = 10; i < 20; i++) {
            randomProducts.push(productos[i]);
        }

        mostrarProductos(bestSellers, beautyContainer);
        mostrarProductos(randomProducts, skincareContainer);
    })

    .catch(function(error){
        console.log("Error:" + error);
    });

function mostrarProductos(lista, contenedor){
    let contenido = "";
    for (let i = 0; i < lista.length; i++){
        let producto = lista[i];
        contenido += `
        <article class= "productos">
            <p class= "precio">$${producto.price}</p>
            <div class= "medio">
                <div>
                    <img class= "imagenes" src="${producto.thumbnail}" alt="${producto.title}">
                </div>
            </div>
            <h3 class="nombre">${producto.title}</h3>
            <p class="descripcion">${producto.description}</p>
            <a class="details" href="./product.html?id=${producto.id}">
                Ver detalle
            </a>
        </article>
     `;
    }
    contenedor.innerHTML = contenido;
}



