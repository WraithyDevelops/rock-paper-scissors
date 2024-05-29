console.log("Hellow world!");

let computerChoice;
let computerResult;
let humanChoice;
let humanResult;
let computerScore = 0;
let humanScore = 0;
let roundResult;

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);  
    if(computerChoice === 0) {
     computerResult = "Rock";
    } else if (computerChoice === 1) {
     computerResult = "Paper";
    } else {
     computerResult = "Scissors";
    }     
    return computerResult;
}

function getHumanChoice() {
    humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (humanChoice === "rock") {
        humanResult = "Rock";
    } else if (humanChoice === "paper") {
        humanResult = "Paper";
    } else if (humanChoice === "scissors") {
        humanResult = "Scissors";
    } else {
        humanResult =  alert("Incorrect choice, please use only one the three choices available!");
    }
    return humanResult;
}
 let x = getHumanChoice();
 let y = getComputerChoice();

function playRound(x,y) {
    if (humanResult === "Rock" && computerResult === "Rock" || humanResult === "Paper" && computerResult === "Paper" || humanResult === "Scissors" && computerResult === "Scissors" ) {
        roundResult = "Draw";
    } else if (humanResult === "Rock" && computerResult === "Scissors" || humanResult === "Paper" && computerResult === "Rock" || humanResult === "Scissors" && computerResult === "Paper") {
        roundResult = "Human won!";
    } else {
        roundResult = "Computer won!";
    }
    return console.log("Human choice:" + humanResult + " " + "Computers choice: " + computerResult + " == the Result is " + roundResult);
}

function checkWinner(roundResult) {
    if(roundResult === "Human won!") {
        humanScore = 1;
    } else {
        computerScore = 1;
    }
    return humanScore, computerScore;
}

playRound();
console.log(checkWinner());


