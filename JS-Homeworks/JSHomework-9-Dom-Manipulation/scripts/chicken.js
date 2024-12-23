// Student Exercise - #2
// Weight calculator in chickens
// Want to know how you wieght in chikens? No problem!

// Write a function named weightInChickens that:
// Takes an input weigh in kilograms
// Calculates weight in chickens ( 1 chicken = 0.5kg )
// The input should be entered through prompt
// The result should be shown in the HTML of the page
// Note:The html page needs to have title and result paragraph


function weightInChickens(weight) {
  return weight / 0.5;
}
let userInput = parseInt(prompt("Enter your weight in kilograms:"));
console.log(weightInChickens(userInput));

let resultDiv = document.getElementById("result");
if (!isNaN(userInput) && userInput) {
  resultDiv.innerHTML = `<p>  ${userInput}kg is ${weightInChickens(
    userInput
  )} chickens :D </p>`;
} else {
  alert(`Please enter a valid number`);
}
