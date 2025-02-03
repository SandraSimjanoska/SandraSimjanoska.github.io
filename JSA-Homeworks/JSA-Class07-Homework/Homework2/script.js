// ## Task 2

// There is a JSON with carts. Make a call and get the following data from it:

// * All product titles in all carts
// * The total quantity of all products purchased
// * Check if there is any cart with a total value above $100,000
// * The total revenue from all carts (sum of all discountedTotal values)
// * The cart with the highest total value
// * Find all products with a discount greater than 15%
// * The user ID of the cart with the highest total quantity
// * The most expensive product in all carts (before discount)
// * The average discounted total per cart
// * The top 3 most expensive products after discount

// **Link:** https://dummyjson.com/carts

const apiUrl = "https://dummyjson.com/carts";

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const carts = data.carts;
    // {
    //     "carts": [
    //       {
    //         "id": 1,
    //         "products": [
    //           {
    //             "id": 168,
    //             "title": "Charger SXT RWD",
    //             "price": 32999.99,
    //             "quantity": 3,
    //             "total": 98999.97,
    //             "discountPercentage": 13.39,
    //             "discountedTotal": 85743.87,
    //             "thumbnail": "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png"
    //           },
    //           {
    //             "id": 78,
    //             "title": "Apple MacBook Pro 14 Inch Space Grey",
    //             "price": 1999.99,
    //             "quantity": 2,
    //             "total": 3999.98,
    //             "discountPercentage": 18.52,
    //             "discountedTotal": 3259.18,
    //             "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png"
    //           },
    //           {
    //             "id": 183,
    //             "title": "Green Oval Earring",
    //             "price": 24.99,
    //             "quantity": 5,
    //             "total": 124.95,
    //             "discountPercentage": 6.28,
    //             "discountedTotal": 117.1,
    //             "thumbnail": "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png"
    //           },
    //           {
    //             "id": 100,
    //             "title": "Apple Airpods",
    //             "price": 129.99,
    //             "quantity": 5,
    //             "total": 649.95,
    //             "discountPercentage": 12.84,
    //             "discountedTotal": 566.5,
    //             "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png"
    //           }
    //         ],
    //         "total": 103774.85,
    //         "discountedTotal": 89686.65,
    //         "userId": 33,
    //         "totalProducts": 4,
    //         "totalQuantity": 15
    //       },

    // * All product titles in all carts
    const allProductTitles = carts.flatMap((c) =>
      c.products.map((product) => product.title)
    );
    console.log("All Product Titles:", allProductTitles);

    // * The total quantity of all products purchased
    const totalQuantityOfAllProducts = carts.reduce(
      (acc, curr) => (acc += curr.totalQuantity),
      0
    );
    console.log(
      "The total quantity of all products purchased:",
      totalQuantityOfAllProducts
    );

    // * Check if there is any cart with a total value above $100,000
    const isThereACartWithTotalAbove100k = carts.some((c) => c.total > 100_000);
    console.log(
      "Is there a cart with value above $100000?:",
      isThereACartWithTotalAbove100k
    );

    // * The total revenue from all carts (sum of all discountedTotal values)
    const totalRevenueFromAllCarts = carts.reduce(
      (acc, curr) => (acc + curr.discountedTotal),
      0
    );
    console.log(
      "The total revenue from all carts is:",
      totalRevenueFromAllCarts
    );

    // * The cart with the highest total value
    const highestTotal = carts
      .map((c) => c.total)
      .reduce((acc, curr) => Math.max(acc, curr));
    const highestValueCart = carts.find((c) => c.total === highestTotal);
    console.log("Cart with the Highest Total Value:", highestValueCart);

    // * Find all products with a discount greater than 15%
    const productsWithADiscountGreaterThan15 = carts
      .flatMap((c) => c.products)
      .filter((c) => c.discountPercentage > 15);
    console.log(
      "All products with a discount greater than 15%:",
      productsWithADiscountGreaterThan15
    );

    // * The user ID of the cart with the highest total quantity
    const userIdOfTheCartWithTheHighestTotalQuantity = carts.sort(
      (a, b) => b.totalQuantity - a.totalQuantity
    );
    console.log(
      "The user ID of the cart with the highest total quantity is:",
      userIdOfTheCartWithTheHighestTotalQuantity[0].userId
    );

    // * The most expensive product in all carts (before discount)
    const mostExpensiveProduct = carts
      .flatMap((c) => c.products)
      .sort((a, b) => b.price - a.price);
    console.log(
      "The most expensive product in all carts:",
      mostExpensiveProduct[0]
    );

    // * The average discounted total per cart
    const avrgDiscountedTotal =
      carts.reduce((acc, curr) => acc + curr.discountedTotal, 0) / carts.length;
    console.log(
      "The average discounted total per cart is:",
      avrgDiscountedTotal
    );

    // * The top 3 most expensive products after discount
    const top3MostExpenisveProductsAfterDiscount = carts
      .flatMap((c) => c.products)
      .sort((a, b) => b.discountedTotal - a.discountedTotal)
      .slice(0, 3);
    console.log(
      "Top 3 Most Expensive Products After Discount:",
      top3MostExpenisveProductsAfterDiscount
    );
  })

  .catch((error) => {
    console.log("Error fetching data", error);
  });
