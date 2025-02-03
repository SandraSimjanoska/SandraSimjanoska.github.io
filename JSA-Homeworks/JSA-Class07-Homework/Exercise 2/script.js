// Exercise 2
// There is a JSON with products. Make a call and get the following data from it:

// All laptops in stock ordered by price descending
// The first grocery item
// Index of the first "Samsung" smartphone
// Check if there is any item from the brand "Sony"
// The name of the highest rated skincare product
// The average discount percentage of products with a rating above 4.5
// Find the product with the highest price
// Average price of all IPhone smartphones
// The product with the lowest price
// Link: https://dummyjson.com/products

const apiUrl = "https://dummyjson.com/products";

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const products = data.products;

    // {
    //     "products": [
    //       {
    //         "id": 1,
    //         "title": "Essence Mascara Lash Princess",
    //         "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    //         "category": "beauty",
    //         "price": 9.99,
    //         "discountPercentage": 7.17,
    //         "rating": 4.94,
    //         "stock": 5,
    //         "tags": [
    //           "beauty",
    //           "mascara"
    //         ],
    //         "brand": "Essence",
    //         "sku": "RCH45Q1A",
    //         "weight": 2,
    //         "dimensions": {
    //           "width": 23.17,
    //           "height": 14.43,
    //           "depth": 28.01
    //         },
    //         "warrantyInformation": "1 month warranty",
    //         "shippingInformation": "Ships in 1 month",
    //         "availabilityStatus": "Low Stock",
    //         "reviews": [
    //           {
    //             "rating": 2,
    //             "comment": "Very unhappy with my purchase!",
    //             "date": "2024-05-23T08:56:21.618Z",
    //             "reviewerName": "John Doe",
    //             "reviewerEmail": "john.doe@x.dummyjson.com"
    //           },
    //           {
    //             "rating": 2,
    //             "comment": "Not as described!",
    //             "date": "2024-05-23T08:56:21.618Z",
    //             "reviewerName": "Nolan Gonzalez",
    //             "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
    //           },
    //           {
    //             "rating": 5,
    //             "comment": "Very satisfied!",
    //             "date": "2024-05-23T08:56:21.618Z",
    //             "reviewerName": "Scarlett Wright",
    //             "reviewerEmail": "scarlett.wright@x.dummyjson.com"
    //           }
    //         ],
    //         "returnPolicy": "30 days return policy",
    //         "minimumOrderQuantity": 24,
    //         "meta": {
    //           "createdAt": "2024-05-23T08:56:21.618Z",
    //           "updatedAt": "2024-05-23T08:56:21.618Z",
    //           "barcode": "9164035109868",
    //           "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
    //         },
    //         "images": [
    //           "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
    //         ],
    //         "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
    //       },

    //All laptops in stock ordered by price descending
    const allLaptops = products
      .filter((p) => p.category === "laptops" && p.stock > 0)
      .sort((a, b) => b.price - a.price);
    console.log(
      "All laptops in stock ordered by price descending:",
      allLaptops
    );

    // The first grocery item
    const firstGroceryItem = products.find((p) => p.category === "groceries");
    console.log("The first grocery item:", firstGroceryItem);

    // Index of the first "Samsung" smartphone
    const indexOfTheFirstSamsungSmartphone = products.findIndex(
      (p) => p.brand === "Samsung" && p.category === "smartphones"
    );
    console.log(
      `Index of the first "Samsung" smartphone:`,
      indexOfTheFirstSamsungSmartphone
    );

    // Check if there is any item from the brand "Sony"
    const isThereItemFromTheBrandSony = products.some(
      (p) => p.brand === "Sony"
    );
    console.log(
      `Is there is any item from the brand "Sony":`,
      isThereItemFromTheBrandSony
    );

    // The name of the highest rated skincare product
    const nameOfTheHighestRatedSkincareProduct = products.filter(
      (p) => p.category === "skincare"
    );
    console.log(
      `The name of the highest rated skincare product:`,
      nameOfTheHighestRatedSkincareProduct.name
    );
    // ne postoi skincare i name ?

    // The average discount percentage of products with a rating above 4.5
    const productsRatingAboveFourAndAHalf = products.filter(
      (p) => p.rating > 4.5
    );
    const avrgDiscountPercentage =
      productsRatingAboveFourAndAHalf.reduce(
        (acc, curr) => (acc += curr.discountPercentage),
        0
      ) / productsRatingAboveFourAndAHalf.length;
    console.log(
      "The average discount percentage of products with a rating above 4.5:",
      avrgDiscountPercentage
    );

    // Find the product with the highest price
    const highestPricedProduct = products.reduce(
      (acc, curr) => (curr.price > acc.price ? curr : acc),
      products[0]
    );

    console.log("The product with the highest price is:", highestPricedProduct);

    // Average price of all IPhone smartphones
    // const averageiPhonePrice = roducts.filter(p => p.brand === "Apple")
    // console.log("Average price of all iPhone smartphones:", averageiPhonePrice);
    // malku mi e nejasno ova so baranjava sto nemaat data ?

    // The product with the lowest price
    const lowestPricedProduct = products.reduce(
      (acc, curr) => (curr.price < acc.price ? curr : acc),
      products[0]
    );
    console.log("The product with the lowest price is:", lowestPricedProduct);
  })
  .catch((error) => {
    console.log("Error fetching data", error);
  });
