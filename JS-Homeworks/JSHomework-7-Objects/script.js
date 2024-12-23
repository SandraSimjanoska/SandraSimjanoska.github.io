// HOMEWORK Part 1
// Create OBJECT animal with 2 properties and 1 method:
// name
// kind
// speak (method)
// this method will take one parameter and will
// print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”
// Bonus: enter the values from prompt

//Literal Notation
let animal = {
  name: "",
  kind: "",
  speak: function (message) {
    console.log(this.kind + " says: '" + message + "'");
  },
};

animal.kind = prompt("What kind of animal is it?");
let message = prompt("What do you want the animal to say?");

animal.speak(message);

//Object Notation
let animal = new Object();

animal.name = "";
animal.kind = "";
animal.speak = function (message) {
  console.log(this.kind + " says: '" + message + "'");
};
animal.kind = prompt("What kind of animal is it?");
let message = prompt("What do you want the animal to say?");

console.log(animal.speak(message));

//Constructor Notation
function Animal(animalName, animalKind) {
  this.animalName = animalName;
  this.animalKind = animalKind;

  this.animalSpeak = function (message) {
    console.log(
      this.animalKind + " " + this.animalName + " says: '" + message + "'"
    );
  };
}

let animalKind = prompt("What kind of animal is it?");
let animalName = prompt("What is the animal's name?");
let message = prompt("What do you want the animal to say?");

let myAnimal = new Animal(animalName, animalKind);
myAnimal.animalSpeak(message);

//HOMEWORK Part 2
// Write a JavaScript program to display the reading status of some book. The object should have the next
// properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.
// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// Bonus: enter the values from prompt()

//Literal notation
let book = {
  title: "",
  author: "",
  readingStatus: "",
  checkBook: function () {
    if (this.readingStatus.toUpperCase() === "Y") {
      console.log(`Already read ${this.title} by ${this.author}`);
    } else {
      console.log(`You still need to read ${this.title} by ${this.author}`);
    }
  },
};
book.title = prompt("What is the title of the book?");
book.author = prompt("Who is the author of the book?");
book.readingStatus = prompt(
  "Have you read the book? Enter 'Y' for yes or 'N' for no."
);
book.checkBook();

//Object notation
let book = new Object();

book.title = "";
book.author = "";
book.checkBook = function () {
  if (this.readingStatus.toUpperCase() === "Y") {
    console.log(`Already read ${this.title} by ${this.author}`);
  } else {
    console.log(`You still need to read ${this.title} by ${this.author}`);
  }
};
book.title = prompt("What is the title of the book?");
book.author = prompt("Who is the author of the book?");
book.readingStatus = prompt(
  "Have you read the book? Enter 'Y' for yes or 'N' for no."
);

book.checkBook();

// Constructor Notation
function Book(title, author, readingStatus) {
  this.title = title;
  this.author = author;
  this.readingStatus = readingStatus;

  this.checkBook = function () {
    if (this.readingStatus.toUpperCase() === "Y") {
      console.log(`Already read "${this.title}" by ${this.author}`);
    } else {
      console.log(`You still need to read "${this.title}" by ${this.author}`);
    }
  };
}

let title = prompt("What is the title of the book?");
let author = prompt("Who is the author of the book?");
let readingStatus = prompt(
  "Have you read the book? Enter 'Y' for yes or 'N' for no."
);

let myBook = new Book(title, author, readingStatus);
myBook.checkBook();
