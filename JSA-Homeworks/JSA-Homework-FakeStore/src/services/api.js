export class ApiService {
  constructor(baseUrl = "https://dummyjson.com") {
    this.baseUrl = baseUrl;
  }

  async fetchData(endpoint) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error("API Fetch Error:", error);
      return null;
    }
  }

  async getProducts(limit = 8, skip = 0) {
    return this.fetchData(`/products?limit=${limit}&skip=${skip}`);
  }

  async getProductsByCategory(category, limit = 8, skip = 0) {
    return this.fetchData(
      `/products/category/${category}?limit=${limit}&skip=${skip}`
    );
  }
}
