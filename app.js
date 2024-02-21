let displayValue = "";
let num1 = "";
let num2 = "";
let operator = "";

const buttons = document.querySelectorAll("button");


function operate(a, b, operator){
    if (operator === "+") return a+b;
    if (operator === "-") return a-b;
    if (operator === "*") return a*b;
    if (operator === "/"){
        if (b !== 0){
            return a/b;
        }else{
            return "MATH ERROR";
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
        }else if (button.innerText === "="){
            if (num1 !== "" && num2 !== "" && operator !== ""){
                let result = operate(parseFloat(num1), parseFloat(num2), operator);
                // Round results when it exceeds 7 decimals
                if (result.toString().length > 9){
                    displayValue = result.toFixed(7);
                }else{
                    displayValue = result.toString();
                }
                populateDisplay();
                num1 = result.toString();
                num2 = "";
                operator = "";
            }
        }else if (button.innerText !== "="){
            // Evaluate only one pairs

            // Always store result after 2 numbers

            // When equals sign is clicked, change result
        }
        // Add clear button 
        if (button.classList.contains("clear")){
            displayValue = "";
            populateDisplay();
        }
    }));
}


clickingButton();