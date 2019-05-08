// Create an script which checks to see if someone is old enough to by alcohol
checkAge();

function checkAge(){
    var age = parseInt(prompt("How old are you?"));
    if(age){
        if(age >= 18){
            console.log("You can buy alcohol");
        } else {
            console.log("You cannot buy alcohol");
        }
    } else {
        console.log("need to start again");
        checkAge();
    }
}
