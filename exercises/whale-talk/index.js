const input = "turpentine and turtles";
const vowels = ["A", "E", "I", "O", "U"];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j].toLowerCase()) {
      resultArray.push(input[i]);
    }
  }
  if (input[i] === "e") resultArray.push(input[i]);
  if (input[i] === "u") resultArray.push(input[i]);
}

console.log(resultArray.join("").toUpperCase());
