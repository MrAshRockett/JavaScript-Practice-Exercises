// Create a script which is going to act as a calculator. You should be asked for 3 prompts which will then output the end calculation. It should be able to do all 4 mathematical options

var number1 = parseInt(prompt("What is the first number?"));
var number2 = parseInt(prompt("What is the second Number?"));

var mathOption = prompt("Would you rather use +, -, /, *");

// console.log(number1);
// console.log(number2);
// console.log(mathOption);
var outcome;
if(mathOption === "+"){
    outcome = number1 + number2;
} else if(mathOption === "-"){
    outcome = number1 - number2
} else if(mathOption === "/"){
    outcome = number1 / number2;
} else if(mathOption === "*"){
    outcome = number1 * number2;
} else {
    console.log("invalid parameters");
}

console.log(outcome);
