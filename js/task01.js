// Create an script which ask you your age to see if someone is old enough to by alcohol

function ageAppropriateDrinks(age) {
  if (age < 18) {
    return prompt('You are not old enough for this product.');
  } else {
    return prompt('Enjoy your drink.');
  }
}

ageAppropriateDrinks()
// Create an script which checks to see if someone is old enough to by alcohol
checkAge()

function checkAge() {
    let age = 55

    if (age <= 18) {
        console.log("Sorry you are not old enough for this product.")
    }
    else {
        console.log("Enjoy your beverages!");
    }
}

