let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generating a random number between 0 - 9 inclusiv 9;
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

// target number to be guessed (generated randomly by your computer)
const targetNum = generateTarget();

// Determining winner fo the game
function compareGuesses(humanGuess, computerGuess, targetNum) {
  validateInput(humanGuess);
  const humanDifference = getAbsoluteDistance(targetNum, humanGuess);
  const computerDifference = getAbsoluteDistance(targetNum, computerGuess);
  if (humanDifference === computerDifference) return true;
  if (humanDifference < computerDifference) return true;
  else return false;
}

// Updating the score of the winner
function updateScore(winner) {
  winner === "human" ? humanScore++ : computerScore++;
}

// Incrementing the round number by 1
function advanceRound() {
  currentRoundNumber++;
}

// Helper function for getting the absolute value of the difference of two nums
function getAbsoluteDistance(number1, number2) {
  return Math.abs(number1 - number2);
}

// Validating (making sure user) enters a number between 0 - 9
function validateInput(number) {
  if (number < 0 || number > 9) alert("Number out of range");
}
