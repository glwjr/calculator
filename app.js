// UI

let firstNumber = "";
let secondNumber = "";
let operandActive = false;
let currentOperand = "";
let previousOperand = "";

const display = document.getElementById("calc-display");
const deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("click", () => {
    display.textContent = display.textContent.substr(0, display.textContent.length - 1);

    if(operandActive == false) {
        firstNumber = display.textContent;
    }

    if(operandActive) {
        secondNumber = display.textContent;
    }
})

const decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener("click", () => {
    if(display.textContent.includes(".")) {
        return
    }
    if(operandActive == false) {
        firstNumber += ".";
    }
    if(operandActive == true) {
        secondNumber += ".";
    }
    display.textContent += ".";    
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
    if (firstNumber == "") {
        return
    }
    if (currentOperand == "divide" && secondNumber == 0) {
        display.textContent = "Error";
        return
    }
    const answer = operate(currentOperand, parseFloat(firstNumber), parseFloat(secondNumber));
    firstNumber = Math.round((answer) * 100) / 100;
    display.textContent = firstNumber;
    secondNumber = "";
    operandActive = false;
})

let numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (display.textContent == 0 && secondNumber == "" && operandActive == false) {
            display.textContent = "";
            firstNumber = "";
        }
        if (display.textContent == 0 && firstNumber !== "") {
            display.textContent = "";
            secondNumber = "";
        }
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