// Create a password checker from a prompt which will check to see is a password is strong enough. Min 5 characters, max 20, 1 number

checkPassword();

function checkPassword(){
    var password = prompt("What is your password?");
    var valid = false;
    var numberFound = false;
    var doubleNumber = false;


    if(password.length < 5){
        console.log("your password is too short");
    } else if(password.length > 20){
        console.log("your password is too long");
    } else {
        for (var i = 0; i < password.length; i++) {
            if(numberFound === true){
                console.log("there is more than 1 number");
                doubleNumber = true;
                break;
            }
            if(parseInt(password[i])){
                numberFound = true;
            }
        }

        if(numberFound === false){
            console.log("Please include a number");
        } else if(doubleNumber === false){
            valid = true;
        }
    }

    if(valid === true){
        console.log("your password is all good");
    } else {
        checkPassword();
    }
}
