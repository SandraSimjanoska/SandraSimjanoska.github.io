export class Cart {
  constructor() {
    this.cart = [];
  }

  addToCart(product) {
    const existingProduct = this.cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }

  calculateTotal() {
    return this.cart.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  }

  updateCartUI(cartItemsElement, cartTotalElement, checkoutButton) {
    cartItemsElement.innerHTML = "";
    this.cart.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.title} x ${item.quantity} - $${(
        item.quantity * item.price
      ).toFixed(2)}`;
      cartItemsElement.appendChild(li);
    });
    cartTotalElement.textContent = this.calculateTotal().toFixed(2);

    checkoutButton.disabled = this.cart.length === 0;
  }
}
