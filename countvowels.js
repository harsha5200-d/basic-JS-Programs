const prompt = require('prompt-sync')();
const String = prompt('Enter a string to count the number of vowels: ');
const vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;

for (let i = 0; i < String.length; i++) {
    if (vowels.includes(String[i].toLowerCase())) {
        count++;
    }
}

console.log('Number of vowels in the string: ' + count);