// Create a script which calculates how old someone is based on their birth year
// 2.a Redo task #1 but based on birth year

var currentYear = 2019;

// // Part 1
// calcAge();
//
// function calcAge(){
//     var yearBorn = parseInt(prompt("What year are you born?"));
//     if(yearBorn){
//         var age = currentYear - yearBorn;
//         console.log(age);
//     } else {
//         console.log("Please enter a valid year");
//         calcAge();
//     }
// }


// // Task 2a
calcAge();

function calcAge(){
    var yearBorn = parseInt(prompt("What year are you born?"));
    if(yearBorn){
        var age = currentYear - yearBorn;
        console.log(age);
        if(age >= 18){
            console.log("you are allowed to buy alcohol");
        } else {
            console.log("you are not allowed to buy alcohol");
        }
    } else {
        console.log("Please enter a valid year");
        calcAge();
    }
}
