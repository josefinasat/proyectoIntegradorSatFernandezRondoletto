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


    // productos

    let beautyContainer = document.querySelector("#beautycontainer")
    let skincareContainer = document.querySelector("#skincarecontainer")

    function cargarCategoria(categoria, contenedor){
        fetch('https://dummyjson.com/products/categories')
            .then(function(response){
                return response.json();
        })
            .then(function(data){
                let productos = data.products;
                let contenido = "";

                for (let i = 0; i < productos.length && i < 10; i ++){
                    contenido += `
                        <article class = "productos"> 
                            <img src = "${productos[i].thumbnail}" alt = "${productos[i].title}" class="imagenes"> 
                            <h3 class = "nombre">${productos[i].title}</h3>
                            <p class="descripcion">${productos[i].description}</p>
                            <p class= "precio">${productos[i].price}</p>
                            <a class="details"href="product.html?id=${productos[i].id}">
                                Ver detalle
                            </a>
                            
                        </article>
                        `;
                }
                contendeor.innerHTML = contenido;

        })
        .catch(function(error){
            console.log("Error:" + error)
        });
    }

    cargarCategoria("beauty", beautyContainer);
    cargarCategoria("skincare", skincareContainer);
