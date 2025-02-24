import { ApiService } from "./services/api.js";
import { ProductGrid } from "./components/productGrid.js";
import { Pagination } from "./components/pagination.js";
import { ShoppingCart } from "./components/shoppingCart.js";
import { Modal } from "./components/modal.js";

const apiService = new ApiService();

// selecting DOM elements
const productGridElement = document.getElementById("product-grid");
const categoryList = document.getElementById("category-list");
const prevPageButton = document.getElementById("prev-page");
const nextPageButton = document.getElementById("next-page");
const pageInfo = document.getElementById("page-info");
const cartItemsElement = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");
const checkoutButton = document.getElementById("checkout");
const thankYouModal = document.getElementById("thank-you-modal");
const closeModalButton = document.getElementById("close-modal-button");
const closeModalIcon = document.querySelector(".close-modal");

const productGrid = new ProductGrid(apiService, productGridElement);
const shoppingCart = new ShoppingCart(
  cartItemsElement,
  cartTotalElement,
  checkoutButton
);
const modal = new Modal(thankYouModal, closeModalButton, closeModalIcon);

let currentCategory = "all";

// pagination
const pagination = new Pagination(
  prevPageButton,
  nextPageButton,
  pageInfo,
  (page) => {
    productGrid.displayProducts(currentCategory, page);
  }
);

// Event listeners
categoryList.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    e.preventDefault();
    currentCategory = e.target.dataset.category;
    pagination.currentPage = 1;
    productGrid.displayProducts(currentCategory, pagination.currentPage);
  }
});

productGridElement.addEventListener("click", async (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    const productId = parseInt(e.target.dataset.id);
    const product = await apiService.fetchData(`/products/${productId}`);
    if (product) {
      shoppingCart.addToCart(product);
    }
  }
});

checkoutButton.addEventListener("click", () => {
    modal.showModal();
});

pagination.setupEventListeners();
shoppingCart.setupEventListeners();
shoppingCart.updateCartUI();
modal.setupEventListeners();
productGrid.displayProducts(currentCategory, pagination.currentPage);
