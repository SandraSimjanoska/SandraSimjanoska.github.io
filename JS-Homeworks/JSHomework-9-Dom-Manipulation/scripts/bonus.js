// BONUS HOMEWORK
// Create a recipe page from inputs

// Ask the user for the name of the recipe
// Ask the user how many ingredients do we need for the recipe
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as heading element, ex: h1-h6
// Print all ingredients as an unordered list in the HTML
// Extra: Use a table if you want to be fancy :)

let nameRecipe = prompt("What is the name of the recipe?");
let h1 = document.getElementById("recipeName");
h1.innerText = `${nameRecipe}`;

let ingredients = prompt("How many ingredients do we need for this recipe?");
while (true) {
  let nameOfIngredients = prompt(
    "Enter all of your ingredients:\nand type 'done' when u finish."
  );
  if (nameOfIngredients.toLowerCase() === "done") {
    break;
  } else {
    let listIngridients = document.getElementById("listIngredients");
    listIngridients.innerHTML += `<li>${nameOfIngredients}</li`;
  }
}
