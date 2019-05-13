// Find the biggest element in an array of numbers
// 4a. Create a script that prompts for a new number and which then gets added to the above array and find the biggest number again.

var numbers = [34, 54, 23, 64, 29 ,42 ,68, 35 ];
console.log(numbers);
var largestNumber = 0;

for (var i = 0; i < numbers.length; i++) {
    if(numbers[i] > largestNumber){
        largestNumber = numbers[i]
    }
}
console.log(largestNumber);

function checkNewNumber(){
    var newNumber = parseInt(prompt("Please give a new number"));
    numbers.push(newNumber);
    if(newNumber > largestNumber){
        largestNumber = newNumber
    }
    console.log(largestNumber);
}
