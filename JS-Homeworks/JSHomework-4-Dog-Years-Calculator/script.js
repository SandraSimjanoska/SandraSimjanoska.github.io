// HOMEWORK
// Write a JavaScript function that will return:

// Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
// Note: Call the function in console to see answer
// Bonus: Make the same function work for converting dog to human years as well

function ageConverter() {
  let age = parseInt(prompt("Please enter the age you want to convert:"));
  let resultHumanYears = age * 7;
  let resultDogYears = age / 7;
  console.log(`Your age in dog years is ${resultHumanYears}, and your age in human years is ${resultDogYears}`);
}
ageConverter();
