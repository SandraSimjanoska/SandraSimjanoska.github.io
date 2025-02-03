// Task 1
// There is a JSON with recipes. Make a call and get the following data from it:

// All Desserts 🤤
// Get the names of recipes with more than 30 reviews
// All recipes that use Cinnamon as an ingredient
// Recipes that are served as both Lunch and Dinner
// The ingredients needed for "Mango Salsa Chicken" dish
// Calculate the average number of calories for all American cusine recipes
// The average cooking time of all pasta recipes
// Find the recipe with the lowest number of reviews
// Link: https://dummyjson.com/recipes

const apiUrl = "https://dummyjson.com/recipes";

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const recipes = data.recipes;

    //{
    // "recipes": [
    //     {
    //       "id": 1,
    //       "name": "Classic Margherita Pizza",
    //       "ingredients": [
    //         "Pizza dough",
    //         "Tomato sauce",
    //         "Fresh mozzarella cheese",
    //         "Fresh basil leaves",
    //         "Olive oil",
    //         "Salt and pepper to taste"
    //       ],
    //       "instructions": [
    //         "Preheat the oven to 475°F (245°C).",
    //         "Roll out the pizza dough and spread tomato sauce evenly.",
    //         "Top with slices of fresh mozzarella and fresh basil leaves.",
    //         "Drizzle with olive oil and season with salt and pepper.",
    //         "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
    //         "Slice and serve hot."
    //       ],
    //       "prepTimeMinutes": 20,
    //       "cookTimeMinutes": 15,
    //       "servings": 4,
    //       "difficulty": "Easy",
    //       "cuisine": "Italian",
    //       "caloriesPerServing": 300,
    //       "tags": [
    //         "Pizza",
    //         "Italian"
    //       ],
    //       "userId": 166,
    //       "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
    //       "rating": 4.6,
    //       "reviewCount": 98,
    //       "mealType": [
    //         "Dinner"
    //       ]
    //     }

    // All Desserts
    const allDesserts = recipes.filter((r) => r.mealType.includes("Dessert"));
    console.log("All Desserts:", allDesserts);

    // Get the names of recipes with more than 30 reviews
    const namesOfRecipesWithMoreThan30Reviews = recipes
      .filter((r) => r.reviewCount > 30)
      .map((r) => r.name);
    console.log(
      "Names of the recipes with more than 30 reviews:",
      namesOfRecipesWithMoreThan30Reviews
    );

    // All recipes that use Cinnamon as an ingredient
    const recipesThatUseCinnamon = recipes.filter((r) =>
      r.ingredients.includes("Cinnamon")
    );
    console.log(
      "All recipes that use Cinnamon as an ingredient:",
      recipesThatUseCinnamon
    );

    // Recipes that are served as both Lunch and Dinner
    const recipesThatAreServedAsBothLunchAndDinner = recipes.filter(
      (r) => r.mealType.includes("Lunch") && r.mealType.includes("Dinner")
    );
    console.log(
      "Recipes that are served as both Lunch and Dinner are:",
      recipesThatAreServedAsBothLunchAndDinner
    );

    // The ingredients needed for "Mango Salsa Chicken" dish
    const ingredientsNeededForMangoSalsaChickenDish = recipes
      .filter((r) => r.name === "Mango Salsa Chicken")
      .map((r) => r.ingredients);
    console.log(
      `The ingredients needed for "Mango Salsa Chicken" dish are:`,
      ingredientsNeededForMangoSalsaChickenDish
    );

    // Calculate the average number of calories for all American cusine recipes
    const americanCuisineRecipes = recipes.filter(
      (r) => r.cuisine === "American"
    );
    const americanCuisineCalories = americanCuisineRecipes.map(
      (r) => r.caloriesPerServing
    );
    // console.log(americanCuisineCalories);
    const avrgNumOfCaloriesForAmericanCuisineRecipes =
      americanCuisineCalories.reduce((acc, curr) => acc + curr, 0) /
      americanCuisineRecipes.length;
    console.log(
      `The average number of calories for all American cusine recipes is:`,
      avrgNumOfCaloriesForAmericanCuisineRecipes
    );

    // The average cooking time of all pasta recipes
    const pastaRecipes = recipes.filter((r) => r.name.includes("Pasta"));
    // console.log(pastaRecipes);
    const pastaCookingTime = pastaRecipes.map((r) => r.cookTimeMinutes);
    const avrgCookingTimeOfAllPastaRecipes =
      pastaCookingTime.reduce((acc, curr) => acc + curr, 0) /
      pastaRecipes.length;
    console.log(
      `The average cooking time of all pasta recipes is:`,
      avrgCookingTimeOfAllPastaRecipes
    );

    // Find the recipe with the lowest number of reviews
    const recipeWithTheLowestNumOfReviews = recipes.reduce(
      (acc, curr) => (curr.reviewCount < acc.reviewCount ? curr : acc) // ako go zadovoluva uslovor curr ako ne acc?
    );
    console.log(
      "The recipe with the lowest number of reviews is:",
      recipeWithTheLowestNumOfReviews
    );
  })
  .catch((error) => {
    console.log("Error fetching data", error);
  });
