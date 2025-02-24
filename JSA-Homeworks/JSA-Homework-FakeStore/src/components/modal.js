export class Modal {
  constructor(modalElement, closeModalButton, closeModalIcon) {
    this.modalElement = modalElement;
    this.closeModalButton = closeModalButton;
    this.closeModalIcon = closeModalIcon;
  }

  setupEventListeners() {
    this.closeModalButton.addEventListener("click", () => {
      this.hideModal();
    });

    this.closeModalIcon.addEventListener("click", () => {
      this.hideModal();
    });

    window.addEventListener("click", (e) => {
      if (e.target === this.modalElement) {
        this.hideModal();
      }
    });
  }

  showModal() {
    this.modalElement.style.display = "flex";
  }

  hideModal() {
    this.modalElement.style.display = "none";
  }
}
