let displayValue = "";
let num1 = "";
let num2 = "";
let operator = "";
let result;
let operatorClicked = false;
const buttons = document.querySelectorAll("button");


function operate(a, b, operator){
    if (operator === "+") return a+b;
    if (operator === "-") return a-b;
    if (operator === "*") return a*b;
    if (operator === "/"){
        if (b !== 0){
            return a/b;
        }else{
            return "ERROR";
        }
    }
}

function evaluate(){
    if (num1 !== "" && num2 !== "" && operator !== ""){
        result = operate(parseFloat(num1), parseFloat(num2), operator);
        num1 = result.toString();
        num2 = "";
        operator = "";
        displayValue = num1;
        populateDisplay();
    }
}

function populateDisplay(){
    const display = document.querySelector('.display');
    if (displayValue.length > 9){
        displayValue = parseFloat(displayValue);
        displayValue = displayValue.toExponential(2);
    }
    display.innerText = displayValue;
    if (display.innerText == ""){
        display.innerText = "0";
    }
}

// When button with class of number is clicked, it should display
buttons.forEach(button => button.addEventListener("click", () =>{
    // Checks if the length of number exceeds 9
    if (button.classList.contains("number")){
        if (displayValue.length < 9){
            displayValue += button.innerText;
            populateDisplay();
            if (operator === ""){
                num1 = displayValue;
                console.log(num1);
            }else{
                num2 = displayValue;
                console.log(num2);
            }
        } 
    }else if (button.classList.contains("operator")){
        if (num1 !== "" && operator !== ""){
            evaluate();
        }
        operator = button.innerText;
        operatorClicked = true;
        if (num1 !== ""){
            displayValue = "";
        }
    }else if ((num1 !== "" && num2 !== "" && operator !== "")){
        evaluate();
    }else if (button.classList.contains("equals")){
        evaluate();
        operatorClicked = false;
    }else if (button.classList.contains("clear")){
        displayValue = "";
        populateDisplay();
        num1 = "";
        num2 = "";
        operator = "";
    }else if (button.classList.contains("clearEntry")){
        displayValue = displayValue.substring(0, displayValue.length - 1);
        populateDisplay();
    }
}));