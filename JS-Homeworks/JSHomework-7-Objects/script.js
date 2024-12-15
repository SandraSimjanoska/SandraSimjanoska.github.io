// HOMEWORK Part 1
// Create OBJECT animal with 2 properties and 1 method:
// name
// kind
// speak (method)
// this method will take one parameter and will
// print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”
// Bonus: enter the values from prompt

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

//HOMEWORK Part 2
// Write a JavaScript program to display the reading status of some book. The object should have the next
// properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.
// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// Bonus: enter the values from prompt()


let book = {
  title: "",
  author: "",
  readingStatus: "",
  checkBook: function () {
    if (this.readingStatus === 'Y') {
      console.log(`Already read ${this.title} by ${this.author}`);
    } else {
      console.log(`You still need to read ${this.title} by ${this.author}`);
    }
  }
};
book.title = prompt("What is the title of the book?"); 
book.author = prompt("Who is the author of the book?"); 
book.readingStatus = prompt("Have you read the book? Enter 'Y' for yes or 'N' for no."); 
book.checkBook();

