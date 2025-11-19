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
                    <a href="./category.html?categoria=${datos[i]}">${datos[i].name}</a>
                </li>`;
        }
    })
    .catch(function (error) {
        alert("Error al cargar las categorias");
        console.log(error);
    });
