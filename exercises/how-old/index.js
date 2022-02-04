// Write your function here:
howOld = (age, year) => {
  // Current year
  const currentYear = new Date().getFullYear();
  // The year your born
  const yearOfBirth = currentYear - age;
  // Calculated age in the givne year
  return calculateAge(year, currentYear, yearOfBirth);
}

// Caculating age (helper function)
function calculateAge(year, currentYear, yearOfBirth) {
  switch(true) {
    case (year > currentYear) :
      calculatedAge = year - yearOfBirth;
      return `You will be ${calculatedAge} in the year ${year}`;
      break;
    case (year < yearOfBirth) :
      calculatedAge = yearOfBirth - year;
      return `The year ${year} was ${calculatedAge} years before you were born`;
      break;
    case (year > yearOfBirth && year < currentYear) :
      calculatedAge = year - yearOfBirth;
      return `You were ${calculatedAge} in the year ${year}`;
      break;
    default: 
      return `You are ${currentYear - yearOfBirth} years old`;
      break;
  }
}

// Once your function is written, write function calls to test your code!
console.log(howOld(27, 1980));






