// HOMEWORK
// Write a javascript function for an ATM:
// The ATM should give cash
// Should return "Not enough money" if you request more money
// Should return the ammount withdrawn and money left on the account if you have enough
// Note: Hardcode your account money in the program
// Bonus: Make it work with prompt()!

function atm() {
  let atmAmount = 100000;
  let userInput = parseInt(prompt("Please enter the amount you would like to withdraw:"));
  let amountLeft = atmAmount - userInput;

  if (userInput > atmAmount) {
    alert("Not enough money!");
  } else if (userInput <= 0) {
    alert("Please enter a valid value!");
  } else if (userInput <= atmAmount) {
    alert(`You have withdrawn ${userInput} and your current account balance is ${amountLeft}`);
  } else {
    alert("Please enter a valid number!");
  }
}
atm();
