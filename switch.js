// calculador switch case
let operator = prompt("enter the operator (+, -, *, /):");
let num1 = parseFloat(prompt("enter the first number:"));
let num2 = parseFloat(prompt("enter the second number:"));

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        if (num2 !== 0) {
            console.log(num1 / num2);
        } else {
            console.log("Error: Division by zero is not allowed.");
        }
        break;
    default:
        console.log("Invalid operator. Please use +, -, *, or /.");
}