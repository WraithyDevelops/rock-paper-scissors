console.log("Hellow world!");

let computerChoice;
let computerResult;
let humanChoice;
let humanResult;

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
    humanChoice = prompt("Rock, Paper or Scissors?");
    if (humanChoice === "Rock") {
        humanResult = "Rock";
    } else if (humanChoice === "Paper") {
        humanResult = "Paper";
    } else if (humanChoice === "Scissors") {
        humanResult = "Scissors";
    } else {
        humanResult =  alert("Incorrect choice, please use only one the three choices available!");
    }
    return humanResult;
}




console.log(getComputerChoice());
console.log(getHumanChoice());