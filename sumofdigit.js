// sum of the digit of a number

const prompt = require('prompt-sync')();

const number = parseInt(prompt('Enter a number to find the sum of its digits: '));
let sum = 0;
let temp = number;

while (temp>0)
{
    let digit = temp%10;
    sum += digit;
    temp = Math.floor(temp/10);
}
console.log('Sum of the digits: ' + sum);
