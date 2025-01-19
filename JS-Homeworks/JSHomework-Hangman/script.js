const words = [
  "lion",
  "tiger",
  "elephant",
  "giraffe",
  "zebra",
  "kangaroo",
  "panda",
  "penguin",
  "koala",
  "cheetah",
  "rhino",
  "hippo",
  "gorilla",
  "monkey",
  "sloth",
  "ostrich",
  "wolf",
  "bear",
  "rabbit",
  "fox",
  "deer",
  "horse",
  "leopard",
  "owl",
  "eagle",
  "shark",
  "dolphin",
  "whale",
  "octopus",
  "seal",
  "turtle",
  "crocodile",
];

const randomWord = words[Math.floor(Math.random() * words.length)];
const guessedLetters = [];
let lives = 10;

const hangmanDisplay = document.getElementById("hangman");
const livesDisplay = document.getElementById("lives");
const buttonsContainer = document.getElementById("buttons");
const hintButton = document.getElementById("hint");

function updateWordDisplay() {
  let display = "";
  for (let i = 0; i < randomWord.length; i++) {
    if (guessedLetters.includes(randomWord[i])) {
      display += randomWord[i] + " ";
    } else {
      display += "_ ";
    }
  }
  hangmanDisplay.textContent = display;
}

function guessLetter(letter) {
  if (guessedLetters.includes(letter)) {
    alert(
      `You've already guessed "${letter.toUpperCase()}". Try a different letter!`
    );
    return;
  }

  guessedLetters.push(letter);

  let correctGuess = false;
  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i] === letter) {
      correctGuess = true;
    }
  }

  if (correctGuess) {
    updateWordDisplay();
    if (!hangmanDisplay.textContent.includes("_")) {
      alert("Congratulations! You guessed the word!");
    }
  } else {
    lives--;
    livesDisplay.textContent = "Lives: " + lives;
    if (lives === 0) {
      alert("Game Over! The word was " + randomWord);
    }
  }
}

function createButtons() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i];
    const button = document.createElement("button");
    button.textContent = letter.toUpperCase();
    button.addEventListener("click", function () {
      guessLetter(letter);
    });
    buttonsContainer.appendChild(button);
  }
}

function giveHint() {
  for (let i = 0; i < randomWord.length; i++) {
    const letter = randomWord[i];
    if (!guessedLetters.includes(letter)) {
      guessedLetters.push(letter);
      updateWordDisplay();
      alert("Hint: The letter '" + letter + "' has been revealed!");
      hintButton.disabled = true;
      return;
    }
  }
  alert("No more hints available!");
}

document.addEventListener("DOMContentLoaded", function () {
  updateWordDisplay();
  createButtons();
  hintButton.addEventListener("click", giveHint);
});
