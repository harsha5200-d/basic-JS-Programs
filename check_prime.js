// checking prime

function checkPrime(num)
{
    for(let i=2;i<num;i++)
    {
        if(num%i===0)
        {
            return false
        }
    }

    return true
}
const prompt = require("prompt-sync")();

const num = parseInt(prompt("enter the number"))

if(checkPrime(num))
{
    console.log(num+"is prime number")
}
else
{
    console.log(num +" not a prime number")
}



