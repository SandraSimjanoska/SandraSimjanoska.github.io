//  Homework #1
// Create a function called tellStory()
// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
// The function should return one big string with a story made from the arguments
// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
// The value that is returned from the function should be printed in the console or in alert

function tellStory(array) {
  return `This is ${array[0]}. ${array[0]} is a nice person. Today they are ${array[1]}. They are ${array[2]} all day. The end.`;
}
let story = tellStory(["Sandra", "sick", "laying in bed"]);
console.log(story);

//Homework #2
// Write a function that will take an array of 5 numbers as an argument and return the sum.
// Print it in the console or in alert

function sumOfFiveNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);
}
sumOfFiveNumbers([1, 5, 9, 10, 6]);

// Homework #3
// Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"

function bigString(array) {
  let oneBigString = "";
  for (let i = 0; i < array.length; i++) {
    oneBigString += array[i] + " ";
  }
  console.log(oneBigString);
}
bigString(["Hello", "there", "students", "of", "Qinshift", "!"]);

// Homework #4
// Title: Looping structures
// Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number,
// and will add the "\n" new line after every even number otherwise it will add " " empty space.

let result = "";
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    result += i + "\n";
  } else {
    result += i + " ";
  }
}
console.log(result);

// Homework #5
// Title: Looping structures

// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14

// Bonus: Try making the function work if there are other types of items in it

// function sumOfMaxMin() {
//   let array = [2, 5, 6, 9, 20];
//   let max = array[0];
//   let min = array[0];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//     if (array[i] <min)
//        min = array[i];
//   }
//   // console.log(
//   //   `The largest element of the array is ${max} and the smallest is ${min}`
//   // );
//   let sum = min + max;
//   console.log(`Output: Max: ${max}, Min: ${min}, Sum: ${sum}`);
// }
// sumOfMaxMin();

//bonus

function sumOfMaxMin(array) {
  // let array = [2, 5, 6, 9, 20, "thousand", null, undefined, false];
  let max = array[0];
  let min = array[0];
  let isValidNumber = false;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && !isNaN(array[i])) {
      isValidNumber = true;

      if (array[i] > max) {
        max = array[i];
      }

      if (array[i] < min) {
        min = array[i];
      }
    }
  }

  if (!isValidNumber) {
    console.log("No numbers found in the array.");
    return;
  }
  let sum = min + max;
  console.log(`Output: Max: ${max}, Min: ${min}, Sum: ${sum}`);
}
sumOfMaxMin(["thousand", null, undefined, false]);
sumOfMaxMin([2, 5, 6, 9, 20]);
sumOfMaxMin([12, 15, 36, 9, 20, "thousand", null, undefined, false]);

// homework #6
//Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

let firstNames = ["Sandra", "Angel", "Kanye"];
let lastNames = ["Simjanoska", "Ivanovski", "West"];

function studentFullName(firstNames, lastNames) {
  let fullNames = [];
  for (let i = 0; i < firstNames.length; i++) {
    fullNames.push(`${i + 1}. ${firstNames[i]} ${lastNames[i]}`);
  }
  return fullNames;
}
console.log(studentFullName(firstNames, lastNames));

// let firstNames2 = ["mile", "pile", "krste"];
// let lastNames2 = ["branoski", "spasovski", "kocevski"];
// console.log(studentFullName(firstNames2, lastNames2));
