// Create an script which ask you your age to see if someone is old enough to by alcohol
let age = parseInt(prompt('What is your age?'))

function ageAppropriateDrinks() {

  if (age >= 18) {
      // console.log('Old enough')
      return alert('Enjoy your drink.')
  } else {
      // console.log('Not old enough')
      return alert('You are not old enough for this product.')
  }
}

ageAppropriateDrinks()

