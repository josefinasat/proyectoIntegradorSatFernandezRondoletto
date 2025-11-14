let queryString = location.search;
let queryStringObj = new URLSearchParams (queryString);
let id = queryStringObj.get('id');
console.log(id);

let foto = document.querySelector(".fotoprod");
let titulo = document.querySelector(".titulodescripcion");

let brand = document.querySelector("#brand");
let description = document.querySelector("#description");
let price = document.querySelector("#price");
let categoryLink = document.querySelector("#categoryLink");
let stock = document.querySelector("#stock");
let tags = document.querySelector("#tags");
let reviewsDiv = document.querySelector("#reviews");


fetch (`https://dummyjson.com/products/${id}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        foto_producto.innerHTML = `<img src="${data.images[0]}" alt="${data.title}">`;

        titulo.innerText = data.title;
        brand.innerText = data.brand;
        description.innerText = data.description;
        price.innerText = `$${data.price}`;
        stock.innerText = data.stock;
        link_categoria.innerText = data.category;
        link_categoria.href = `category.html?cat=${data.category}`;


        let tags = "";
        for (let i = 0; i < data.tags.length; i++){
            tags += `#${data.tags[i]}`;
        }
        tags.innerText = tagsTexto;

        let reviews = ""
        for (let i = 0; i < data.reviews.length; i++){
            let cadareview = data.review[i];
            reviews += `
            <article class="review">
            <p><strong>Rating:</strong> ${r.rating}</p>
            <p>"${r.comment}"</p>
            <p><strong>Usuario:</strong> ${r.reviewerName}</p>
            <p><strong>Fecha:</strong> ${r.date.slice(0, 10)}</p>
            </article>`
        }
    })
