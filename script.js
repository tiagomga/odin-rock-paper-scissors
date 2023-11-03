let playerScore = 0;
let computerScore = 0;
const NUM_POINTS = 5;

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

function isFinished() {
    if (playerScore === NUM_POINTS || computerScore === NUM_POINTS) {
        return true;
    }
    return false;
}

function toggleDisabledState(button) {
    if (button.disabled === true) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
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
const resetButton = document.querySelector('#reset');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

startButton.addEventListener("click", () => {
    if (playerScore === NUM_POINTS || computerScore === NUM_POINTS) {
        const player = document.querySelector("#human");
        const computer = document.querySelector("#computer");
        player.textContent = 0;
        computer.textContent = 0;
    }
    toggleDisabledState(rock);
    toggleDisabledState(paper);
    toggleDisabledState(scissors);
    toggleDisabledState(startButton);
});

resetButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    document.querySelector(".result").textContent = "";
    if (rock.disabled === true) {
        toggleDisabledState(rock);
        toggleDisabledState(paper);
        toggleDisabledState(scissors);
    }
});

document.addEventListener("click", (event) => {
    let computerChoice = getComputerChoice();
    console.log(playRound(event.target.id, computerChoice));
    updateScore();
    
    const resultDiv = document.querySelector('.result');
    
    if (isFinished()) {
        if (rock.disabled === false) {
            resetButton.disabled = false;
            toggleDisabledState(rock);
            toggleDisabledState(paper);
            toggleDisabledState(scissors);
        }
        if (playerScore === NUM_POINTS) {
            resultDiv.textContent = "YOU WON!";
        } else if (computerScore === NUM_POINTS) {
            resultDiv.textContent = "YOU LOST! BETTER LUCK NEXT TIME!";
        }
    }
});