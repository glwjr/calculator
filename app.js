// UI

let firstNumber = "";
let secondNumber = "";
let operandActive = false;
let currentOperand = "";
let previousOperand = "";

const display = document.getElementById("calc-display");
const deleteButton = document.querySelector(".delete");

const decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener("click", () => {
    if(display.textContent.includes(".")) {
        return
    }

    display.textContent += ".";
    firstNumber += ".";
})

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => clearAll());

function clearAll() {
    display.textContent = "";
    firstNumber = "";
    secondNumber = "";
    currentOperand = "";
    operandActive = false;
}

const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", () => {
    if (firstNumber == "" || firstNumber == 0) {
        return
    }
    if (currentOperand == "divide" || secondNumber == 0) {
        display.textContent = "Error";
        return
    }
    const answer = operate(currentOperand, parseFloat(firstNumber), parseFloat(secondNumber));
    firstNumber = answer;
    display.textContent = firstNumber;
    secondNumber = 0;
    operandActive = false;
})

let numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (operandActive == true) {
            secondNumber += parseFloat(button.dataset.value);
        }
        if (operandActive == false) {
            firstNumber += parseFloat(button.dataset.value);
        }
        display.textContent += button.dataset.value;
    })
})

let operandButtons = document.querySelectorAll(".operand");
operandButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (secondNumber !== "") {
            firstNumber = operate(currentOperand, parseFloat(firstNumber), parseFloat(secondNumber));
        }
        operandActive = true;
        currentOperand = button.dataset.value;
        secondNumber = "";
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