function calculateExpression(inputString) {
  inputString = inputString.replace(/\s+/g, "");

  let numbers = [];
  let operators = [];
  let num = "";

  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];

    if ("0123456789.".includes(char)) {
      num += char;
    } else if ("+-*/".includes(char)) {
      numbers.push(parseFloat(num));
      operators.push(char);
      num = "";
    }
  }

  numbers.push(parseFloat(num));

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "*" || operators[i] === "/") {
      if (operators[i] === "/" && numbers[i + 1] === 0) {
        return "ERROR: Division by zero!";
      }
      let result =
        operators[i] === "*"
          ? numbers[i] * numbers[i + 1]
          : numbers[i] / numbers[i + 1];
      numbers[i] = result;
      numbers.splice(i + 1, 1);
      operators.splice(i, 1);
      i--;
    }
  }

  let finalResult = numbers[0];
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "+") {
      finalResult += numbers[i + 1];
    } else if (operators[i] === "-") {
      finalResult -= numbers[i + 1];
    }
  }

  return finalResult;
}

let isResultDisplayed = false;

function calculatorInput(inputValue) {
  let result = document.getElementById("result");
  let currentValue = result.innerHTML;
  let lastValue = currentValue.slice(-1);

  if (isResultDisplayed && "0123456789".includes(inputValue)) {
    result.innerHTML = inputValue;
    isResultDisplayed = false;
    return;
  }

  if (
    inputValue === "." &&
    currentValue.includes(".") &&
    "+-*/".includes(lastValue) === false
  ) {
    return;
  }

  if (
    "+-*/".includes(inputValue) &&
    currentValue === "" &&
    inputValue !== "-"
  ) {
    return;
  }

  if ("+-*/".includes(inputValue) && "+-*/".includes(lastValue)) {
    if (inputValue !== lastValue) {
      deleteOne();
      result.innerHTML += inputValue;
    }
    return;
  }

  result.innerHTML += inputValue;
  isResultDisplayed = false;
}

function clearAll() {
  let result = document.getElementById("result");
  result.innerHTML = "";
}

function deleteOne() {
  let result = document.getElementById("result");
  result.innerHTML = result.innerHTML.slice(0, -1);
}

function calculate() {
  let result = document.getElementById("result");
  let calculated = calculateExpression(result.innerHTML);

  result.innerHTML = calculated;
  isResultDisplayed = true;
}
