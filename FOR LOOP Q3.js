const userInput = prompt("Please enter a number: ")
const userLength = prompt("Please enter a length: ")
for(let i = 1; i <= userLength; i++){
        const result =  userInput * i
console.log(userInput + " * " + i + " = " + result);
}