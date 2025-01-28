// ## Exercise 2
// Create 2 variables with arrow functions.

// 1. First arrow function will accept two parameters, one for element and one for color. The function should change the
//    given element text color with the color given from the second color parameter. If no parameter is passed for color,
//    the default value is **black**.
// 2. Second arrow function will accept two parameters, one for element and one for textSize. The function should change
//    the given element text size to the number given from the second textSize parameter. If no parameter is passed for
//    textSize, the default value is 24.

// Create an HTML document with two inputs, a button and an h1 header with some text. The first input should be for text
// size and the second for color. When the button is clicked the h1 header should change according to the input values (
// change size as the first input value and color as the second input value ). Use the functions that we declared earlier
// and use arrow function for the event listener of the button.

// #### Ex:

// **Input1: ** Person enters 28
// **Input2: ** Person enters red
// **Result: ** The h1 text should change to size 28 and color red

const changeTextColor = (element, color = "black") => {
  element.style.color = color;
};

const changeTextSize = (element, textSize = 24) => {
  element.style.fontSize = `${textSize}px`;
};

const colorInput = document.getElementById("color-input");
const sizeInput = document.getElementById("size-input");
const button = document.getElementById("change-button");
const header = document.getElementById("header");
const errorMessage = document.getElementById("error-message");

button.addEventListener("click", () => {
  const color = colorInput.value;
  const textSize = sizeInput.value;

  errorMessage.textContent = "";

  if (color === "" && textSize === "") {
    errorMessage.textContent = "Please enter both a color and a text size.";
    return;
  }

  if (color === "") {
    errorMessage.textContent = "Please enter a color.";
    return;
  }

  if (textSize === "" || isNaN(textSize) || textSize <= 0) {
    errorMessage.textContent = "Please enter a valid number for text size.";
    return;
  }

  changeTextColor(header, color);
  changeTextSize(header, textSize);
});
