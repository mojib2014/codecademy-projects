// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:
/*
doubling every other element in the array if becomes larger then 9
we subtract 9 from it and then we sum all the elements and check 
if it's equally divided by 2 if yes it's valid credit card# else
false(it's not)
*/
const validateCred = (array) => {
  let sum = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    let value = array[i];
    if ((array.length - 1 - i) % 2 === 1) value *= 2;
    if (value > 9) value -= 9;
    sum += value;
  }
  console.log(sum);
  return sum % 10 === 0;
};
// Test Cases:
console.log(validateCred([3, 6, 5, 1, 2, 2, 7, 6, 1, 9, 9, 0, 9, 0])); // should return true
console.log(validateCred(valid2)); // should return true
console.log(validateCred(invalid1)); // should return false

/* 
checking for invalid cards in an array of card arrays and uses the 
validateCred method as helper method to validate each row(array inside the array)
*/
const findInvalidCards = (nestedArray) => {
  const invalid = [];
  for (let rows = 0; rows < nestedArray.length; rows++) {
    if (!validateCred(nestedArray[rows])) invalid.push(nestedArray[rows]);
  }
  return invalid;
};

// Test Cases:
console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5])); // Shouldn't print anything
console.log(
  findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5]),
); // Should print all of the numbers
console.log(findInvalidCards(batch));
/*
finds the companies that have issued the invalid cards by looping 
through a nested array and returns the list of companies issued
the cards
*/
const idInvalidCardCompanies = (nestedArray) => {
  let companies = [];
  for (let rows = 0; rows < nestedArray.length; rows++) {
    let companyDigit = nestedArray[rows][0];
    switch (companyDigit) {
      case 3:
        if (companies.indexOf("Amex") === -1) companies.push("Amex");
        break;
      case 4:
        if (companies.indexOf("Visa") === -1) companies.push("Visa");
        break;
      case 5:
        if (companies.indexOf("MasterCard") === -1)
          companies.push("MasterCard");
        break;
      case 6:
        if (companies.indexOf("Discover") === -1) companies.push("Discover");
        break;
      default:
        return "Company not found";
        break;
    }
  }
  return companies;
};
// Test Cases:
console.log(idInvalidCardCompanies(findInvalidCards(batch)));
console.log(idInvalidCardCompanies([invalid1])); // Should print ['visa']
console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
