function convertNumberToWords(number) {
  if (number === "") {
    return "ERROR! Please enter a number.";
  }

  if (isNaN(number) || number % 1 !== 0) {
    return "ERROR! Please enter a valid whole number.";
  }

  if (number < 0 || number > 1000000) {
    return "ERROR! Please enter a number between 0 and 1,000,000.";
  }

  if (number === 1000000) {
    return "One Million";
  }

  const toTen = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const toTwenty = [
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const toHundred = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  const thousand = "Thousand";

  function convertLessThan1000(num) {
    let result = "";

    if (num >= 100) {
      result += `${toTen[Math.floor(num / 100)]} Hundred `;
      num %= 100;
    }

    if (num >= 20) {
      result += `${toHundred[Math.floor(num / 10)]} `;
      num %= 10;
    }

    if (num >= 10) {
      result += `${toTwenty[num - 10]} `;
      num = 0;
    }

    if (num > 0) {
      result += `${toTen[num]} `;
    }

    return result;
  }

  let result = "";
  const thousands = Math.floor(number / 1000);
  const hundreds = number % 1000;

  if (thousands > 0) {
    result += `${convertLessThan1000(thousands)} ${thousand} `;
  }

  if (hundreds > 0) {
    result += convertLessThan1000(hundreds);
  }

  return result;
}

function convertAndDisplayNumber() {
  const input = document.getElementById("numInput");
  const resultElement = document.getElementById("result");

  const number = input.value;
  const result = convertNumberToWords(number);

  resultElement.innerText = result;
}

document
  .getElementById("convertButton")
  .addEventListener("click", convertAndDisplayNumber);
