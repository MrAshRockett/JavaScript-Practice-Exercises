// Create a script that asks for x amount of people. And then asks for their ages and finds the oldest and youngest age. As well as the average age

var numberOfPeople = parseInt(prompt("How many people are there?"));
// console.log(numberOfPeople);
var ages = [];
for (var i = 0; i < numberOfPeople; i++) {
    var age = parseInt(prompt("What is person " + (i+1) +"s age?"));
    ages.push(age);
}
var oldestAge = 0;
var youngestAge = ages[0];
var totalAge = 0;
for (var i = 0; i < ages.length; i++) {
    if(ages[i] > oldestAge){
        oldestAge = ages[i];
    }
    if(ages[i] < youngestAge){
        youngestAge = ages[i];
    }
    totalAge = totalAge + ages[i];
}
var averageAge = totalAge / ages.length;
console.log("oldest person is " + oldestAge);
console.log("yougnest person is " + youngestAge);
console.log("the average age is " + averageAge);
