let displayValue = "";
let num1 = "";
let num2 = "";
let operator = "";
let result;

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

// Populate display
function populateDisplay(){
    const display = document.querySelector('.display');
    display.innerText = displayValue;
}
// When button with class of number is clicked, it should display
function clickingButton(){
    buttons.forEach(button => button.addEventListener("click", () =>{
        // Checks if the length of display exceeds 9
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
            operator = button.innerText;
            if (num1 !== ""){
                displayValue = "";
                populateDisplay();
            }
        }else if (num1 !== "" && num2 !== "" && operator !== ""){
                result = operate(parseFloat(num1), parseFloat(num2), operator);
                displayValue = result.toString();
                populateDisplay();
                num1 = result.toString();
                num2 = "";
                operator = "";
            }
        // Add clear button 
        if (button.classList.contains("clear")){
            displayValue = "";
            populateDisplay();
            num1 = "";
            num2 = "";
            operator = "";
        }

        // Add backspace button
        if (button.classList.contains("clearEntry")){
            displayValue = displayValue.substring(0, displayValue.length - 1);
            populateDisplay();
        }
    }));
}

clickingButton();