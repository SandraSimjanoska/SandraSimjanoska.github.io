import { Cart } from "../services/cart.js";

export class ShoppingCart {
  constructor(cartItemsElement, cartTotalElement, checkoutButton) {
    this.cart = new Cart();
    this.cartItemsElement = cartItemsElement;
    this.cartTotalElement = cartTotalElement;
    this.checkoutButton = checkoutButton;
  }

  setupEventListeners() {
    this.checkoutButton.addEventListener("click", () => {
      this.cart.clearCart();
      this.updateCartUI();
    });
  }

  addToCart(product) {
    this.cart.addToCart(product);
    this.updateCartUI();
  }

  updateCartUI() {
    this.cart.updateCartUI(
      this.cartItemsElement,
      this.cartTotalElement,
      this.checkoutButton
    );
  }
}
