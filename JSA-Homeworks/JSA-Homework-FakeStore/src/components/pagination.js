export class Pagination {
  constructor(prevPageButton, nextPageButton, pageInfo, onPageChange) {
    this.prevPageButton = prevPageButton;
    this.nextPageButton = nextPageButton;
    this.pageInfo = pageInfo;
    this.onPageChange = onPageChange;
    this.currentPage = 1;
  }

  updatePageInfo() {
    this.pageInfo.textContent = `Page ${this.currentPage}`;
  }

  setupEventListeners() {
    this.prevPageButton.addEventListener("click", () => {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
        this.updatePageInfo();
        this.onPageChange(this.currentPage);
      }
    });

    this.nextPageButton.addEventListener("click", () => {
      this.currentPage += 1;
      this.updatePageInfo();
      this.onPageChange(this.currentPage);
    });
  }
}
