const prompt = require('prompt-sync')();


function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
const inputString = prompt('Enter a string to count the number of vowels: ');
const vowelCount = countVowels(inputString);
console.log('Number of vowels in the string: ' + vowelCount);   