let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
};

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
    if (userGuess < 0 || userGuess > 9) {
        alert("Your number is out of range. Please enter a number between 0 and 9.");
        return;
    }

    const userDifference = getAbsoluteDistance(userGuess, targetNumber);
    const computerDifference = getAbsoluteDistance(computerGuess, targetNumber);

    if (userDifference <= computerDifference) {
        return true; // Human player wins
    } else {
        return false; // Computer player wins
    }
};

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
};

const advanceRound = () => currentRoundNumber++;;
