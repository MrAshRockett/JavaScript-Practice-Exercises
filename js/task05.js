// Create an odd and even number checker

function checkOddEven(){
    var numberToCheck = parseInt(prompt("Please enter a number"));
    if( (numberToCheck % 2) == 0){
        console.log(numberToCheck + " is an even number");
    } else {
        console.log(numberToCheck + " is an odd number");
    }
}
