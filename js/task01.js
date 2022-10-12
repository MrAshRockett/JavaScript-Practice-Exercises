// Create an script which ask you your age to see if someone is old enough to by alcohol

function ageAppropriateDrinks(age) {
  if (age < 18) {
    return prompt('You are not old enough for this product.');
  } else {
    return prompt('Enjoy your drink.');
  }
}

ageAppropriateDrinks()