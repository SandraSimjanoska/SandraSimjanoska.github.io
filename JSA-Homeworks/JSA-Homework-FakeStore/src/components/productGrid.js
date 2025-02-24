import { ApiService } from "../services/api.js";
import { isValidUrl } from "../helpers/helpers.js";

export class ProductGrid {
  constructor(apiService, productGridElement) {
    this.apiService = apiService;
    this.productGridElement = productGridElement;
  }

  async displayProducts(category = "all", page = 1) {
    const limit = 8;
    const skip = (page - 1) * limit;

    try {
      const products =
        category === "all"
          ? await this.apiService.getProducts(limit, skip)
          : await this.apiService.getProductsByCategory(category, limit, skip);

      console.log("API Response:", products);

      if (!products || products.products.length === 0) {
        this.productGridElement.innerHTML = "<p>No products available.</p>";
        return;
      }

      this.productGridElement.innerHTML = "";

      products.products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const imageUrl =
          product.thumbnail && isValidUrl(product.thumbnail)
            ? product.thumbnail
            : "https://via.placeholder.com/150";

        productCard.innerHTML = `
          <img src="${imageUrl}" alt="${product.title}" class="product-image">
          <h3 class="product-title">${product.title}</h3>
          <p class="product-price">$${product.price}</p>
          <p class="product-category">${product.category}</p>
          <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        this.productGridElement.appendChild(productCard);
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      this.productGridElement.innerHTML = "<p>Failed to load products.</p>";
    }
  }
}
