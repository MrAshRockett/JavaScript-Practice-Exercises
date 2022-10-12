// Create a script which calculates how old someone is based on their birth year
// 2a. Redo task #1 but this time use the age calculated in task #2


// Current Date divided by birth date

const calculateAge = (birthday) => {
  const ageDifMs = Date.now() - new Date(birthday).getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
console.log(calculateAge('1994-02-16'))