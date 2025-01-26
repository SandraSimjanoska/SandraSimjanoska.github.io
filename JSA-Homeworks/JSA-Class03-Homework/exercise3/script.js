// Exercise 3
// When the page is loaded, fetch 10 products from the provided API.
// Render 10 product cards on the screen.
// Each product card should include:

// Image : The product's image displayed in a visually appealing size.
// Title : The product's title as a heading.
// Description : The product's description in a paragraph.
// URL: https://dummyjson.com/products?limit=10
// Documentation: https://dummyjson.com/docs

// Optional: Use Bootstrap for Styling
// You can optionally use the Bootstrap Card Component to style the product cards

const url = "https://dummyjson.com/products?limit=10";
const productDataDiv = document.getElementById("product-container");

function generateProducts(products) {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const card = document.createElement("div");

    card.className = "col-md-4 mb-4";

    card.innerHTML = `
            <div class="product-card">
                <img src="${product.images}" class="card-img-top">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
            </div>
        `;

    productDataDiv.appendChild(card);
  }
}

function fetchProducts() {
  fetch(url)
    .then(function (response) {
      console.log(response);
      const parsedResponse = response.json();
      return parsedResponse;
    })
    .then(function (data) {
      console.log(data);
      const products = data.products;
      generateProducts(products)
    })
    .catch(function (error) {
      console.log("ERROR:", error);
    });
}

window.addEventListener("load", function () {
  fetchProducts(url);
});
