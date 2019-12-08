const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error");
  }
};
const getComputerChoice = () => {
  number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "Cheat code used - user wins!";
  }
  if (userChoice === computerChoice) {
    return "Game tied.";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer wins";
    } else {
      return "User wins";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer wins";
    } else {
      return "User wins";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer wins";
    } else {
      return "User wins";
    }
  }
};

const playGame = () => {
  let userChoice = getUserChoice("paper");
  let computerChoice = getComputerChoice();
  console.log(`You picked ${userChoice}`);
  console.log(`Computer picked ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
