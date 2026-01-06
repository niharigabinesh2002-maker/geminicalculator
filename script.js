let currentNumber = '';
let previousNumber = '';
let operator = '';

function appendNumber(number) {
  currentNumber += number;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('result').value = currentNumber;
}

function clearDisplay() {
  currentNumber = '';
  previousNumber = '';
  operator = '';
  updateDisplay();
}

function setOperator(op) {
  operator = op;
  previousNumber = currentNumber;
  currentNumber = '';
}

function calculate() {
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case '*':
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case '/':
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
  }
  currentNumber = result.toString();
  operator = '';
  previousNumber = '';
  updateDisplay();
}