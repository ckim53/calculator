const BUTTON_SIZE = 70;
const CALCULATOR_WIDTH = 450;
const CALCULATOR_HEIGHT = 510;
const DISPLAY_WIDTH = 320;
const DISPLAY_HEIGHT = 35;

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

function operate(operator, num1, num2) {
    switch(operator) {
        case('+'):
            return add(num1, num2);
        case('-'):
            return subtract(num1, num2);
        case('*'):
            return multiply(num1, num2);
        case('/'):
            return divide(num1, num2);
        default:;
    }
}

function createButton(num) {
    const button = document.createElement("div");
    button.style.width = BUTTON_SIZE + 'px';
    button.style.height = BUTTON_SIZE + 'px';
    button.textContent = num;
    button.classList.add("button");
    button.textContent = num;
    return button;
}

function createDisplay() {
    const display = document.querySelector("#display");
    display.style.width = DISPLAY_WIDTH + 'px';
    display.style.height = DISPLAY_HEIGHT + 'px';
    display.textContent = 1234;
    return display;
}


function createCalculator() {
    const calculator = document.querySelector("#calculator");
    calculator.style.width = CALCULATOR_WIDTH + 'px';
    calculator.style.height = CALCULATOR_HEIGHT + 'px';

    const buttonRows = [[7, 8, 9, '/'],
        [4, 5, 6, '*'],
        [1, 2, 3, '-'],
        [0, '.', '=']];

    createDisplay();

    const buttons = document.querySelector("#buttons");

    const button = createButton("clear");
    buttons.appendChild(button);
    buttonRows.map(row => 
        (row.map(button => createButton(button)))
        .map(button => buttons.appendChild(button)));
}

createCalculator();    