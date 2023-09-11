const num1 = parseInt(prompt("Enter 1st number: "))
const operator = prompt("Enter +, -, /, *: ")
const num2 = parseInt(prompt("Enter 2nd number: "))
function calc(num1, num2, operator){
switch (operator) {
case '+':
      result = num1 + num2;
      break;
case '-':
    result = num1 - num2;
    break;
case '*':
    result = num1 * num2;
    break;
case '/':
    if(num2 == 0){
        console.log("Please enter another number rather than 0")
    }else{
        result = num1 / num2;
    }
    break;
default:
   console.log("Please enter the operator from +,-,*,/")
}
    document.write(`Result: ${num1} ${operator} ${num2} = ${result}`);
    return result;
}

let Result = calc(num1,num2,operator);
