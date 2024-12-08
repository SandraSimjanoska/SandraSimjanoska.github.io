// HOMEWORK
// Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in
// Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:
// 0 - Rat
// 1 - Ox
// 2 - Tiger
// 3 - Rabbit
// 4 - Dragon
// 5 - Snake
// 6 - Horse
// 7 - Goat
// 8 - Monkey
// 9 - Rooster
// 10 - Dog
// 11 - Pig

// Chinese zodiac with IF statement:
let userYear = Number(
  prompt("Enter your birth year to find your Chinese Zodiac Sign:")
);
let sum = (userYear - 4) % 12;

if (sum === 0) {
 alert("Your chinese zodiac sign is: Rat!");
} else if (sum === 1) {
   alert("Your chinese zodiac sign is: Ox!");
} else if (sum === 2) {
   alert("Your chinese zodiac sign is: Tiger!");
} else if (sum === 3) {
   alert("Your chinese zodiac sign is: Rabbit!");
} else if (sum === 4) {
   alert("Your chinese zodiac sign is: Dragon!");
} else if (sum === 5) {
   alert("Your chinese zodiac sign is: Snake!");
} else if (sum === 6) {
   alert("Your chinese zodiac sign is: Horse!");
} else if (sum === 7) {
   alert("Your chinese zodiac sign is: Goat!");
} else if (sum === 8) {
   alert("Your chinese zodiac sign is: Monkey!");
} else if (sum === 9) {
   alert("Your chinese zodiac sign is: Rooster!");
} else if (sum === 10) {
   alert("Your chinese zodiac sign is: Dog!");
} else if (sum === 11) {
   alert("Your chinese zodiac sign is: Pig!");
} else {
   alert("Please enter a valid number!");
}

//Chinese zodiac with SWITCH:
switch (sum) {
  case 0:
    alert("Your chinese zodiac sign is: Rat!");
    break;
  case 1:
    alert("Your chinese zodiac sign is: Ox!");
    break;
  case 2:
    alert("Your chinese zodiac sign is: Tiger!");
    break;
  case 3:
    alert("Your chinese zodiac sign is: Rabbit!");
    break;
  case 4:
    alert("Your chinese zodiac sign is: Dragon!");
    break;
  case 5:
    alert("Your chinese zodiac sign is: Snake!");
    break;
  case 6:
    alert("Your chinese zodiac sign is: Horse!");
    break;
  case 7:
    alert("Your chinese zodiac sign is: Goat!");
    break;
  case 8:
    alert("Your chinese zodiac sign is: Monkey!");
    break;
  case 9:
    alert("Your chinese zodiac sign is: Rooster!");
    break;
  case 10:
    alert("Your chinese zodiac sign is: Dog!");
    break;
  case 11:
    alert("Your chinese zodiac sign is: Pig!");
    break;
  default:
    alert("Please enter a valid number!");
    break;
}
