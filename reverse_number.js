// reverse a number

const prompt = require('prompt-sync')();

const number = parseInt(prompt('Enter a number to reverse: '));
let reversed = 0;
let temp = number;

while (temp>0)
{
    let digit = temp%10;
    reversed = reversed*10 + digit;
    temp = Math.floor(temp/10);
}

console.log('Reversed number: ' + reversed);
