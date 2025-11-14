let queryString = location.search;
let queryStringObj = new URLSearchParams (queryString);
let id = queryStringObj.get('id');
console.log(id);

let foto = document.querySelector("#foto_producto");
let titulo = document.querySelector(".titulodescripcion");

let brand = document.querySelector("#brand");
let description = document.querySelector("#description");
let price = document.querySelector("#price");
let category = document.querySelector("#category");
let stock = document.querySelector("#stock");
let tags = document.querySelector("#tags");
let reviews = document.querySelector("#reviews");


fetch ('https://dummyjson.com/products/1')
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
                <p><strong>Rating:</strong> ${cadareview.rating}</p>
                <p>"${cadareview.comment}"</p>
                <p><strong>Usuario:</strong> ${cadareview.reviewerName}</p>
                <p><strong>Fecha:</strong> ${cadareview.date.slice(0, 10)}</p>
            </article>`;
        }
        reviewsDiv.innerHTML = htmlReviews;
    })
    .catch(function(error){
        console.log("Error: " + error);
});
