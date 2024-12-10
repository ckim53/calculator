const BUTTON_SIZE = 100;
const CALCULATOR_SIZE = 410;
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

function display(){

}
function createButton(num) {
    const button = document.createElement("div");
    button.textContent = num;
    button.addEventListener("click", num=>display(num));
}


function createCalculator() {
    const calculator = document.querySelector("#calculator");
    calculator.style.width = CALCULATOR_SIZE + 'px';
    calculator.style.height = CALCULATOR_SIZE + 'px';

    const display = document.querySelector("#display");
    display.style.width = DISPLAY_WIDTH + 'px';
    display.style.height = DISPLAY_HEIGHT + 'px';
    display.textContent = 1234;

    /*const buttons = document.querySelector("#buttons");
    let row = 0; col = 0, currentButton = 0;
    for (row; row < 3; row++) {
        for (col; col < 3; col++) {
            let button = createButton(currentButton);
            currentButton += 1;
        }
    }*/
}

createCalculator();