// Register User
// Create an HTML page, with 4 inputs for FirstName, LastName ,Email and Password and a button
// On click of the button call a function that will get all the inputs' values and use the values as parameters for a new 
// function which will add them to string
// Finaly print the string in a new p element on the screen

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let submitBtn = document.getElementById("submitBtn");
let result = document.getElementById("result");

function getUserInfo(firstName, lastName, email, password) {
    return `User: ${firstName} ${lastName} is registered!`;
}

submitBtn.addEventListener("click", function () {
 let userInfo = getUserInfo(firstName.value, lastName.value, email.value, password.value);
    result.textContent = userInfo;
});
