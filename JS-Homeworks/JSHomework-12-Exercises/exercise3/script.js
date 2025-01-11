// Write a JavaScript program called Phone Book.
// You should have three input fields in the html, one for First name, Last name and Phone number.
// After entering the values into each of them, by clicking on a “Save” button, you should save the newly added contact as
// an object and add it to an array.
// Display the contacts from the array in a table below the inputs.
// Make sure the user is entering appropriate values in the form!

// Bonus: Add column with delete and edit button so that you can edit or delete a contact!

let array = [];

document.getElementById("saveBtn").addEventListener("click", savePhoneBook);

function PhoneBook(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

function savePhoneBook() {
  let fName = document.getElementById("firstName").value;
  let lName = document.getElementById("lastName").value;
  let pNumber = document.getElementById("phoneNumber").value;
  let regExp = /[a-zA-Z]/;
  let phoneRegExp = /^\+?[0-9\s-]+$/;

  if (
    !regExp.test(fName) ||
    !regExp.test(lName) ||
    !phoneRegExp.test(pNumber)
  ) {
    alert("Please enter valid details.");
    return;
  }

  for (let i = 0; i < array.length; i++) {
    if (
      array[i].firstName === fName &&
      array[i].lastName === lName &&
      array[i].phoneNumber === pNumber
    ) {
      alert("This contact already exists in the phone book.");
      return;
    }
  }

  let phoneObject = new PhoneBook(fName, lName, pNumber);
  array.push(phoneObject);
  renderPhoneBook();
}

function renderPhoneBook() {
  let tBody = document.getElementById("tableBody");
  tBody.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    let tr = document.createElement("tr");

    let firstNameData = document.createElement("td");
    let lastNameData = document.createElement("td");
    let phoneNumberData = document.createElement("td");

    firstNameData.textContent = array[i].firstName;
    lastNameData.textContent = array[i].lastName;
    phoneNumberData.textContent = array[i].phoneNumber;

    tr.appendChild(firstNameData);
    tr.appendChild(lastNameData);
    tr.appendChild(phoneNumberData);
    tBody.appendChild(tr);
  }
}

