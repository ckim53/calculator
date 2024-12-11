const BUTTON_SIZE = 70;
const CALCULATOR_WIDTH = 450;
const CALCULATOR_HEIGHT = 650;
const DISPLAY_WIDTH = 350;
const DISPLAY_HEIGHT = 35;

let displayValues = [];
let argsList = [];
let currentValue = 0;
let nextValue = 0;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, operator, num2) {
    switch(operator) {
        case('+'):
            return add(num1, num2);
        case('-'):
            return subtract(num1, num2);
        case('*'):
            return multiply(num1, num2);
        case('/'):
            return divide(num1, num2);
        default: return;
    }
}

function createButton(value) {
    const button = document.createElement("div");
    button.style.width = BUTTON_SIZE + 'px';
    button.style.height = BUTTON_SIZE + 'px';
    button.textContent = value;
    button.classList.add("button");
    button.textContent = value;
    button.addEventListener("click", function () {
        updateDisplay(value);
    });
    return button;
}

function createDisplay() {
    const display = document.querySelector("#display");
    display.style.width = DISPLAY_WIDTH + 'px';
    display.style.height = DISPLAY_HEIGHT + 'px';
    display.textContent = 1234;
    return display;
}

function createButtons() {
    const buttonRows = [[7, 8, 9, '/'],
        [4, 5, 6, '*'],
        [1, 2, 3, '-'],
        [0, '.', '+', '=']];

    const buttons = document.querySelector("#buttons");
    const button = createButton("clear");
    buttons.appendChild(button);
    buttonRows.map(row => 
        (row.map(button => createButton(button)))
        .map(button => buttons.appendChild(button)));
    return;
}

function createCalculator() {
    const calculator = document.querySelector("#calculator");
    calculator.style.width = CALCULATOR_WIDTH + 'px';
    calculator.style.height = CALCULATOR_HEIGHT + 'px';
    return;
}

function updateDisplay(button) {
    let buttonValue = parseInt(button);
    switch (Number.isInteger(buttonValue)) {
        case (true):
            currentValue = (currentValue * 10) + buttonValue;
            display.textContent = currentValue;
            break;
        case (false):
            if (button == "clear") {
                display.textContent = "";
                displayValues = [];
                currentValue = 0;
            }
            else if (button == '=') {
                displayValues.push(currentValue);
                let i = 0;
                let result = displayValues[0];
                console.log(displayValues);
                while (i+2 < displayValues.length) {
                    result = operate(result, displayValues[i+=1], displayValues[i+=1]);
                }
                display.textContent = result;
                displayValues = [];
                currentValue = 0;
            }
            else {
                displayValues.push(currentValue);
                displayValues.push(button);
                currentValue = 0;    
            }
    }
}

createCalculator();    
const display = createDisplay();
createButtons();