function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const playerChoice = prompt("scissors, paper, rock!!");
    return playerChoice;
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    function playRound() {
        const humanChoice = getHumanChoice().toLowerCase();
        const computerChoice = getComputerChoice().toLowerCase();
    
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! The computer chose paper!");
            ++computerScore;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! The computer chose scissors!");
            ++humanScore;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! The computer chose scissors!");
            ++computerScore;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! The computer chose rock!");
            ++humanScore;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! The computer chose rock!");
            ++computerScore;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! The computer chose paper!");
            ++humanScore;
        }
    }    

    playRound();
    // console.log(computerScore, humanScore);
    playRound();
    playRound();
    playRound();
    // console.log(computerScore, humanScore);
    playRound();

    console.log(`The computer's score is ${computerScore}`);
    console.log(`Your score is ${humanScore}`);

    if (computerScore > humanScore) {
        console.log("The computer is the winner!");
    } else if (humanScore > computerScore) {
        console.log("You're the winner! Congratulations! My name jef!");
    } else if (humanScore === computerScore) {
        console.log("No one won! It's a tie!!");
    }
}

playGame();