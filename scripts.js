const BUTTON_SIZE = 70;
const CALCULATOR_WIDTH = 390;
const CALCULATOR_HEIGHT = 550;
const DISPLAY_WIDTH = 310;
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
    return num2 == 0 ? (display.textContent = "Naur", null)
    : num1 / num2;
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
    button.addEventListener("mousedown", function () {
        button.style.backgroundColor = "lightBlue";
    });
    button.addEventListener("mouseup", function () {
        button.style.backgroundColor = "";
    });
    return button;
}

function createDisplay() {
    const display = document.querySelector("#display");
    display.style.width = DISPLAY_WIDTH + 'px';
    display.style.height = DISPLAY_HEIGHT + 'px';
    display.textContent = '';
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

let op1 = '', op2 = '', 
prevOperator = '', 
currentOperator = '',
decimal = 0,
evaluated = false,
result = 0;

function updateDisplay(button) {
    let buttonValue = parseInt(button);
    switch (Number.isInteger(buttonValue)) {
        case (true):
            decimal != 0 ? 
            (currentValue = (buttonValue / (10 ** decimal)) + currentValue, decimal += 1)
            : (currentValue = (currentValue * 10) + buttonValue);
            display.textContent = currentValue;
            break;
        case (false): 
            if (button == "clear") {
                display.textContent = "";
                displayValues = [];
                currentValue = 0;
                evaluated = false;
            }
            else if (button == '.') {
                decimal = 1;
                display.textContent = currentValue + '.';
            }
            else {
                decimal != 0 ? decimal = 0 : decimal;
                displayValues.push(currentValue);
                displayValues.push(button);

                if (displayValues.length == 4) {
                    op1 = displayValues[0];
                    op2 = displayValues[2];
                    prevOperator = displayValues[1];
                    currentOperator = displayValues[3];
                    result = operate(op1, prevOperator, op2);
              
                    if (result != null) {
                        evaluated = true;
                        currentOperator == '=' ?
                            (displayValues[0] = result,
                            evaluated = false,
                            displayValues.splice(1, 3),
                            currentValue = result)
                        : (displayValues[0] = result,
                            displayValues[1] = currentOperator,
                            displayValues.pop(),
                            displayValues.pop());
                        result.toString().length < 9 ? 
                        display.textContent = result
                        : display.textContent = result.toPrecision(9);
                    }
                    else {
                        displayValues.pop();
                        displayValues.pop();
                    }
                }    
                button == '=' ? 
                    (evaluated ? (displayValues.pop(), displayValues.pop(), 
                    currentValue = result) : 
                    (displayValues.pop(), displayValues.pop(), 
                    evaluated = false)) 
                : currentValue = 0;   
            }
    }
}


createCalculator();    
const display = createDisplay();
createButtons();