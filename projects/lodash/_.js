const _ = {};
// .clamp() method will clamp a number in between lower and upper bound
// (lower and upper bound inclusiv).
// _.clamp = function(number, lower, upper) {
//   return number < lower ? lower : number > upper ? upper : number;
// }

_.clamp = function (number, lower, upper) {
  const lowerClampedValue = Math.max(number, lower);
  const clampedValue = Math.min(lowerClampedValue, upper);
  return clampedValue;
};
// console.log(_.clamp(10, 5, 5));

/* 
  inRage() method returns boolean value whether a number in range of- 
  the start and end parameters.
  if end parameter is not supplied it will set start to zero and end to start.
  if start is larger then end it will swap them 
*/
_.inRange = function (number, start, end) {
  if (!end) {
    end = start;
    start = 0;
  }
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  const isRange = number >= start && number < end;
  return isRange;
};
// console.log(_.inRange(-3, -2, -6));

/*
  words() method turns a string into array of words 
  separated by a space.
*/
_.words = function (string) {
  return string.split(" ");
};
// console.log(_.words("Code academy is the best"));

/*
  Adds specified number of spaces around the string and if
  the number is larger then the length of the string it'll
  return the original string.
  if length divided by length of string is evenly divided
  it'll add same number of spaces at the begining and end 
  string.
  else it'll add the extra number of spaces at the end.
*/
_.pad = function (string, length) {
  if (length <= string.length) return string;
  const startPads = Math.floor((length - string.length) / 2);
  const endPads = length - string.length - startPads;
  string = `|${" ".repeat(startPads)}${string}${" ".repeat(endPads)}|`;
  return string;
};
// console.log(_.pad("abc", 5));

// checks to see if a specific key exists in a given object
_.has = function (object, key) {
  return object[key] !== undefined;
};
// console.log(_.has({name: "Mojib", age: 30}, "age"));

// It swaps the key with value of a given object
_.invert = function (object) {
  const inverted = {};
  for (let key in object) {
    inverted[object[key]] = key;
  }
  return inverted;
};
// console.log(_.invert({"a": 1, "b": 2, "c": 1}));

var users = {
  barney: { age: 36, active: true },
  fred: { age: 40, active: false },
  pebbles: { age: 1, active: true },
};
/*
  It takes a function as paramerter and checks if a given
  object contains a certain key if true returns the key 
  otherwise returns undefined
*/
_.findKey = function (object, predicateFunc) {
  let result;
  for (let key in object) {
    if (predicateFunc(object[key])) return key;
  }
  return undefined;
};
// console.log(_.findKey(users,function(key) {return key.age === 40}));

/*
  removes elements from specified index and if zero
  or nothing is passed as start index it'll return the original 
  array.
*/
_.drop = function (array, number) {
  if (number === "undefined") number = 1;
  return array.slice(number);
};
// console.log(_.drop([1, 2, 3], 0));

var users = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true },
];
/*
  Creates a slice of an array excluding elements droped from the 
  begining.
  drops elements untill predicate function (takes 3 parameters) returns
  falsey value.
*/
_.dropWhile = function (array, predicate) {
  const dropNumber = array.findIndex(
    (element, index) => !predicate(element, index, array),
  );
  const dropedArray = this.drop(array, dropNumber);
  return dropedArray;
};
// console.log(_.dropWhile(users, function(user) { return user.active}));

/*
  returns a new array of array by grouping the elements
  of the array by specified number(size).
  if size is not passed it returns an array of array with 
  one element in each array.
*/
_.chunk = function (array, size) {
  if (!size) size = 1;
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
};

console.log(_.chunk([1, 2, 3, 4, 5], 2));
// Do not write or modify code below this line.
module.exports = _;
