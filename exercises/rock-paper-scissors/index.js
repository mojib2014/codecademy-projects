const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else console.log("Error: Please enter a valid input.");
};

// console.log(getUserChoice("mojib"));

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) return "rock";
  if (randomNumber === 1) return "paper";
  if (randomNumber === 2) return "scissors";
};

// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") return "user won.";
  if (userChoice === computerChoice) return "It's was tie.";
  if (userChoice === "rock")
    return computerChoice === "paper" ? "Computer won." : "User won.";

  if (userChoice === "paper") {
    return computerChoice === "scissors"
      ? "Computer won."
      : computerChoice === "rock"
      ? "User won."
      : null;
  }

  if (userChoice === "scissors") {
    return computerChoice === "rock"
      ? "Computer won."
      : computerChoice === "paper"
      ? "User won."
      : null;
  }
};

// console.log(determineWinner("scissors", "rock"));
const playGame = () => {
  const userChoice = getUserChoice("rock");
  console.log("user", userChoice);
  const computerChoice = getComputerChoice();

  console.log("computer", computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
