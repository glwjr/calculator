// UI

let firstNumber = 0;
let secondNumber = 0;
let operandActive = false;
let currentOperand = "";
let previousOperand = "";

const display = document.getElementById("calc-display");
const deleteButton = document.querySelector(".delete");
const decimalButton = document.querySelector(".decimal");

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => clearAll());

function clearAll() {
    display.textContent = "";
    firstNumber = 0;
    secondNumber = 0;
    currentOperand = "";
    operandActive = false;
}

const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", () => {
    const answer = operate(currentOperand, parseInt(firstNumber), parseInt(secondNumber));
    firstNumber = answer;
    display.textContent = answer;
    secondNumber = 0;
    operandActive = false;
})

let numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (operandActive == true) {
            secondNumber += button.dataset.value;
        }
        if (operandActive == false) {
            firstNumber += button.dataset.value;
        }

        display.textContent += button.dataset.value;
    })
})

let operandButtons = document.querySelectorAll(".operand");
operandButtons.forEach(button => {
    button.addEventListener("click", () => {
        operandActive = true;
        currentOperand = button.dataset.value;
        display.textContent = "";
    })
})

// Math functions

function add(a,b) {
    return a + b
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return a / b
}

function operate(operand, a, b) {
    switch (operand) {
        case "add":
            return add(a,b)
        case "subtract":
            return subtract(a,b)
        case "multiply":
            return multiply(a,b)
        case "divide":
            return divide(a,b)
    }
}