var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var addButton = document.getElementById("add");
var subtractButton = document.getElementById("subtract");
var multiplyButton = document.getElementById("multiply");
var divideButton = document.getElementById("divide");
var resultOutput = document.getElementById("result");
function add() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a + b;
    resultOutput.textContent = result.toString();
}
function subtract() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a - b;
    resultOutput.textContent = result.toString();
}
function multiply() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a * b;
    resultOutput.textContent = result.toString();
}
function divide() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    if (b == 0) {
        resultOutput.textContent = "Cannot divide by zero";
    }
    else {
        var result = a / b;
        resultOutput.textContent = result.toString();
    }
}
addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtract);
multiplyButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);
