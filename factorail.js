// factorial
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
const prompt = require('prompt-sync')();

const number = parseInt(prompt('Enter a number to calculate its factorial: '));
if (number < 0) {
    console.log('Factorial is not defined for negative numbers.');
} else {
    console.log('Factorial of ' + number + ' is ' + factorial(number));
}   