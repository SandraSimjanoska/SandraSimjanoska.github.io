// Exercise 6
// One student has 5 exams in the first semester.
// His/Her grades for all of the exams are 10, 6, 8, 9, 6 respectively.
// The professor told the students that for passing the first semester they must have average of 8.
// The student needs to know whether they have passed the semester or not. Alert on screen if the student pass or not!

let grades = [10, 6, 8, 9, 6];
let total = 0;
for (let i = 0; i < grades.length; i++) {
  total += grades[i];
}
let average = total / grades.length;
console.log(average);
if (average >= 8) {
  alert("Congratulations! You have passed the semester.");
} else {
  alert("Unfortunately, you did not pass the semester.");
}

// Exercise 7
// Make an array of ten elements. Make sure four of them to be: Null, undefined, NaN, “” and false (JavaScript falsy values).
// Create a function that will work for every array in the world :) and it will remove all the falsy values from the array.

let array = [
  "Sandra",
  undefined,
  26,
  NaN,
  null,
  "",
  false,
  "Simjanoska",
  99,
  "Qinshift",
];

function removeFalsyValues(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      result.push(array[i]);
    }
  }

  return result;
}

let newArray = removeFalsyValues(array);
console.log(array);
console.log(newArray);

// Exercise 8
// Write a JavaScript program that will serve you as a simple ToDo app.
//  Allow the user to insert as much todos as he/she wants. When finished adding todos, display all the todo list in the console.
//  Use function for adding new todo, and another function for displaying all todos.

let toDoList = [];
function addNewTodo(todo) {
  toDoList.push(todo);
}
function displayToDoList() {
  console.log("Your To Do List:");
  for (let i = 0; i < toDoList.length; i++) {
    console.log(`${i + 1}. ${toDoList[i]}`);
  }
}

let addingToDo = true;
while (addingToDo) {
  let newTodo = prompt(
    "Enter your To Do \nor type 'done' to when you want to stop adding new To Dos:"
  );

  if (newTodo.toLowerCase() === "done") {
    addingToDo = false;
  } else {
    addNewTodo(newTodo);
  }
}
displayToDoList();

// Exercise 9
// Write a JavaScript program that will serve as a phone book.
// The user need to insert person's full name and number in order to save a contact.
// When contact is added succesfully display to the user a message that the contact was added.
// Print the phone book in the console at the end.

let phoneBook = [];

while (true) {
  let name = prompt("Enter the person's name\nor type 'done' to finish:");
  if (name.toLowerCase() === "done") {
    break;
  }
  let phoneNumber = prompt("Enter the phone number:");
  phoneBook.push({ name: name, phoneNumber: phoneNumber });
  console.log(`${name}'s contact has been added!`);
}
console.log("Phone Book:");
for (let i = 0; i < phoneBook.length; i++) {
  console.log(`${i + 1}. Name: ${phoneBook[i].name}, Phone: ${phoneBook[i].phoneNumber}`);
}

//   Exercise 10
//   Write a JavaScript program, that will mock an academy entity. You should have 3 entities.

//   Academy - AcademyName, NumberOfGroups, NumberOfClassrooms
//   Student - FirstName, LastName, Age, eMail, Academy, Group
//   Group - Name, NumberOfStudents, Students
//   At the end in the console:

//   Display AcademyName
//   Display Student's Academy (The academy on which the student is enroled)
//   Display NumberOfStudents in a given group
//   HINT: Use methods(on the objects) for displaying the things in the console

function Academy(academyName, numberOfGroups, numberOfClassrooms) {
  this.academyName = academyName;
  this.numberOfGroups = numberOfGroups;
  this.numberOfClassrooms = numberOfClassrooms;
  this.displayAcademyName = function () {
    console.log("Academy Name: " + this.academyName);
  };
}

function Group(name, numberOfStudents) {
  this.name = name;
  this.numberOfStudents = numberOfStudents;
  this.students = [];

  this.addStudent = function (student) {
    this.students.push(student);
    this.numberOfStudents = this.students.length; 
  };

  this.displayNumberOfStudents = function () {
    console.log(
      `Number of students in group "${this.name}": ${this.numberOfStudents}`
    );
  };
}

function Student(firstName, lastName, age, email, academy, group) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.email = email;
  this.academy = academy;
  this.group = group;

  this.displayAcademy = function () {
    console.log(
      `${this.firstName} ${this.lastName} is enrolled at ${this.academy.academyName}`
    );
  };
}

let myAcademy = new Academy("Qinshift Academy", 7, 5);
let group = new Group("Group G2", 24);
let student1 = new Student(
  "Sandra",
  "Simjanoska",
  26,
  "sandra.simjanoska@live.com",
  myAcademy,
  group
);
let student2 = new Student(
  "Angel",
  "Ivanovski",
  26,
  "angel.ivanovski@gmail.com",
  myAcademy,
  group
);

group.addStudent(student1);
group.addStudent(student2);
myAcademy.displayAcademyName();
student1.displayAcademy();
student2.displayAcademy();
group.displayNumberOfStudents();
