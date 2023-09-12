let number1;
let number2;
let operator;

const button = document.querySelectorAll("button");


function operate(a, b, operator){
    if (operator === "+") return a+b;
    if (operator === "-") return a-b;
    if (operator === "*") return a*b;
    if (operator === "/") return a/b;
}

button.addEventListener("click", () => {
    
})

