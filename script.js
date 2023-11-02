let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection.localeCompare(computerSelection) === 0) {
        return `${playerSelection} vs. ${computerSelection}. It's a tie!`;
    } else if (playerSelection.localeCompare("rock") === 0 && computerSelection.localeCompare("paper") === 0) {
        computerScore++;
        return `${playerSelection} vs. ${computerSelection}. You lose this round!`;
    } else if (playerSelection.localeCompare("rock") === 0 && computerSelection.localeCompare("scissors") === 0) {
        playerScore++;
        return `${playerSelection} vs. ${computerSelection}. You win this round!`;
    } else if (playerSelection.localeCompare("paper") === 0 && computerSelection.localeCompare("rock") === 0) {
        playerScore++;
        return `${playerSelection} vs. ${computerSelection} . You win this round!`;
    } else if (playerSelection.localeCompare("paper") === 0 && computerSelection.localeCompare("scissors") === 0) {
        computerScore++;
        return `${playerSelection} vs. ${computerSelection}. You lose this round!`;
    } else if (playerSelection.localeCompare("scissors") === 0 && computerSelection.localeCompare("rock") === 0) {
        computerScore++;
        return `${playerSelection} vs. ${computerSelection}. You lose this round!`;
    } else if (playerSelection.localeCompare("scissors") === 0 && computerSelection.localeCompare("paper") === 0) {
        playerScore++;
        return `${playerSelection} vs. ${computerSelection}. You win this round!`;
    }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        choice = "rock";
    } else if (choice === 1) {
        choice = "paper";
    } else {
        choice = "scissors";
    }

    return choice;
}

function updateScore() {
    const player = document.querySelector("#human");
    const computer = document.querySelector("#computer");
    player.textContent = playerScore;
    computer.textContent = computerScore;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();

        while (playerSelection.localeCompare("rock") !== 0 &&
                playerSelection.localeCompare("paper") !== 0 &&
                playerSelection.localeCompare("scissors") !== 0) {
            playerSelection = prompt("Invalid input! Rock, paper or scissors?").toLowerCase();
        }

        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You won!");
    } else if (playerScore === computerScore) {
        console.log("It's a tie!");
    } else {
        console.log("Boohoo! You lost!");
    }
}

const startButton = document.querySelector('#game');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

startButton.addEventListener('click', () => {
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
});

