let displayValue = '0';
let number1 = "";
let number2 = "";
let operator = "";

const buttons = document.querySelectorAll("button");
const button = document.querySelector("button");
const number = document.getElementsByClassName(".number");


function operate(a, b, operator){
    if (operator === "+") return a+b;
    if (operator === "-") return a-b;
    if (operator === "*") return a*b;
    if (operator === "/") return a/b;
}

// Populate display
function populateDisplay(){
    const display = document.querySelector('.display');
    // Set text content to value of button
    display.innerTextContent = displayValue;
    if (displayValue.length > 9){
        display.innerTextContent = displayValue.substring(0, 9);
    }
}

populateDisplay();
