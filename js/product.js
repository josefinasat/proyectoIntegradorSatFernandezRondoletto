let campoBusqueda5 = document.querySelector(".search");
let inputBusqueda5 = document.querySelector(".busqueda");

campoBusqueda5.addEventListener('submit', function(event){
    event.preventDefault();

    if ( inputBusqueda5.value == "") {
        alert ("No se puede dejar el campo en blanco")
    } else if (inputBusqueda5.value.length < 3){
        alert ("El termino debe tener al menos 3 letras")
    } else{
        this.submit()
    }
    
})

//aside
let url5 = 'https://dummyjson.com/products/categories';

fetch(url5)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (datos) {
        let lista5 = document.querySelector("#lista-categorias");

        for (let i=0; i < datos.length; i++){
            lista5.innerHTML +=`
                <li>
                    <a href="./category.html?categoria=${datos[i]}">${datos[i].name}</a>
                </li>`;
        }
    })
    .catch(function (error) {
        alert("Error al cargar las categorias");
        console.log(error);
    });


//product
let queryString = location.search;
let queryStringObj = new URLSearchParams (queryString);
let id = queryStringObj.get('id');

let detalleProd = document.querySelector(".detalleprod");
let reviewsProd = document.querySelector(".review");

fetch (`https://dummyjson.com/products/${id}`)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        console.log(data)
        detalleProd.innerHTML +=`
        <article class="detalleprod">
            <img class="fotoprod" src="${data.images[0]}" alt="${data.title}">
            <div class="contenidop">
                <h1 class="titulodescripcion"> ${data.title}</h1>
                <p><strong>Brand:</strong> ${data.brand} </p>
                <p><strong>Description:</strong> ${data.description} </p>
                <p><strong>Price:</strong> ${data.price} </p>
                <p><strong>Category: </strong><a href="category.html?category=${data.category}">${data.category}</a></p>
                <p><strong>Stock:</strong> ${data.stock} </p>
                <p><strong>Tags:</strong></p>
                <ul>
                    <li>${data.tags[0]}</li>
                    <li>${data.tags[1]}</li>
                </ul>
            </div>
        </article>`;

        let reviews = data.reviews
        for (let i=0; i < 4; i++) {
            let review = reviews[i]
            reviewsProd.innerHTML += `
            <article class="reviews">
                <h2>User Review</h2>
                <div class="review">
                    <div>
                        <ul>
                            <li><strong>Rating:</strong>${review.rating}</li>
                            <li><strong>Comment:</strong>${review.comment}</li>
                            <li><strong>Date:</strong>${review.date}</li>
                            <li><strong>User:</strong>${review.reviewerName}</li>
                        </ul>
                    </div>
                </div>
            </article>`
        }
    })

    .catch(function(error){
        console.log("Error: " + error);
    });
