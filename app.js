let displayValue = '';
let number1 = "";
let number2 = "";
let operator = "";

const buttons = document.querySelectorAll("button");


function operate(a, b, operator){
    if (operator === "+") return a+b;
    if (operator === "-") return a-b;
    if (operator === "*") return a*b;
    if (operator === "/") return a/b;
}

// Populate display
function populateDisplay(){
    const display = document.querySelector('.display');
    display.innerText = displayValue;
}

// When button with class of number is clicked, it should display
function clickingButton(){
    buttons.forEach(button => button.addEventListener("click", () =>{
        // Checks if the length of display exceeds 9
        if (displayValue.length < 9){
            displayValue += button.innerText;
            populateDisplay();
        }
    }));
}

clickingButton();