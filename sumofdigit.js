// sum of the digit of a number

const prompt = require('prompt-sync')();

function sumOfDigits(num) {
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        let digit = temp % 10;
        sum+=digit;
        temp = Math.floor(temp/10);
    }
    return sum;
}

const num = parseInt(prompt('Enter a number to find the sum of its digits: '));
console.log('Sum of the digits: ' + sumOfDigits(num));