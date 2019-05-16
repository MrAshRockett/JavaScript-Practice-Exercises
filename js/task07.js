// Create an script that calculates the average number from an array
// 7a. Numbers then can be added from prompt and new average given

var numbers = [34, 54, 23, 64, 29 ,42 ,68, 35 ];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
}
console.log(total);

var average = total / numbers.length;
console.log(average);

function getNewAverage(){
    var newNumber = parseInt(prompt("what is the new number"));
    numbers.push(newNumber);
    total = total + newNumber;
    var newAverage = total / numbers.length;
    console.log(newAverage);
}
