const number1 = document.getElementById("number1") as HTMLInputElement;
const number2 = document.getElementById("number2") as HTMLInputElement;
const addButton = document.getElementById("add") as HTMLButtonElement;
const subtractButton = document.getElementById("subtract") as HTMLButtonElement;
const multiplyButton = document.getElementById("multiply") as HTMLButtonElement;
const divideButton = document.getElementById("divide") as HTMLButtonElement;
const resultOutput = document.getElementById("result") as HTMLOutputElement;

function add(): void {
    const a = parseFloat(number1.value);
    const b = parseFloat(number2.value);
    const result = a + b;
    resultOutput.textContent = result.toString();
}

function subtract(): void {
    const a = parseFloat(number1.value);
    const b = parseFloat(number2.value);
    const result = a - b;
    resultOutput.textContent = result.toString();
}

function multiply(): void {
    const a = parseFloat(number1.value);
    const b = parseFloat(number2.value);
    const result = a * b;
    resultOutput.textContent = result.toString();
}

function divide(): void {

     const a = parseFloat(number1.value);
     const b = parseFloat(number2.value);
     if (b == 0){
        resultOutput.textContent = "Cannot divide by zero";
     }
     else{
        const result = a / b;
        resultOutput.textContent = result.toString();
     }
    
}

addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtract);
multiplyButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);
