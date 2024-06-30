let computerChoice;
let computerResult;
let humanResult;
let computerScore = 0;
let humanScore = 0;
let roundResult;
let scoreResult;
let roundNumber = 0;
let playerChoice;
let testResult;

const humanChoice = document.getElementsByTagName("button");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const playerScore = document.getElementById("playerScore");
const cpuScore = document.getElementById("cpuScore");
const playerResult = document.getElementById("playerResult")
const cpuResult = document.getElementById("cpuResult");

const buttons = document.querySelector("buttons");
const playGameBtn = document.getElementById("playGame");





rock.addEventListener("click", function(){
    const rockValue = document.getElementById("rock").value;
    playerResult.innerText = "Player's choice:\n" + rockValue;
    testResult = rockValue;
    console.log(getHumanChoice());
    console.log(getComputerChoice());
    cpuResult.innerText = "CPU's choice:\n" + computerResult;
    console.log(playRound(humanResult, computerResult));
    checkWinner();
    displayWinner();
    playGameBtn.addEventListener("click", function(){
        humanScore = 0;
        computerScore = 0;
        playerScore.innerText = "Player Score: " + humanScore;
        cpuScore.innerText = "CPU Score: " + computerScore;
        exitText = document.querySelector(".exitText");
        exitText.innerText = "";
        resultPrint = document.querySelector(".exitTextExtra");
        resultPrint.innerText = "";
        playerResult.innerText = "";
        cpuResult.innerText = "";
    });
});


paper.addEventListener("click", function(){
    const paperValue = document.getElementById("paper").value;
    playerResult.innerText = "Player's choice:\n" + paperValue;
    testResult = paperValue;
    console.log(getHumanChoice());
    console.log(getComputerChoice());
    cpuResult.innerText = "CPU's choice:\n" + computerResult;
    console.log(playRound(humanResult, computerResult));
    checkWinner();
    displayWinner();
    playGameBtn.addEventListener("click", function(){
        humanScore = 0;
        computerScore = 0;
        playerScore.innerText = "Player Score: " + humanScore;
        cpuScore.innerText = "CPU Score: " + computerScore;
        exitText = document.querySelector(".exitText");
        exitText.innerText = "";
        resultPrint = document.querySelector(".exitTextExtra");
        resultPrint.innerText = "";
        playerResult.innerText = "";
        cpuResult.innerText = "";
    });
});


scissors.addEventListener("click", function(){
    const scissorsValue = document.getElementById("scissors").value;
    playerResult.innerText = "Player's choice:\n" + scissorsValue;
    testResult = scissorsValue;
    console.log(getHumanChoice());
    console.log(getComputerChoice());
    cpuResult.innerText = "CPU's choice:\n" + computerResult;
    console.log(playRound(humanResult, computerResult));
    checkWinner();
    displayWinner();
    playGameBtn.addEventListener("click", function(){
        humanScore = 0;
        computerScore = 0;
        playerScore.innerText = "Player Score: " + humanScore;
        cpuScore.innerText = "CPU Score: " + computerScore;
        exitText = document.querySelector(".exitText");
        exitText.innerText = "";
        resultPrint = document.querySelector(".exitTextExtra");
        resultPrint.innerText = "";
        playerResult.innerText = "";
        cpuResult.innerText = "";
    });

});


function getHumanChoice() {
    
    if (testResult === "rock") {
       humanResult = "Rock";
    } else if (testResult === "paper") {
        humanResult = "Paper";
    } else if (testResult === "scissors") {
        humanResult = "Scissors";
    } else {
        console.log("Select one of the choices.");
    }

    return humanResult; 
}


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





function playRound(humanResult, computerResult) {
    
    const resultPrint = document.querySelector(".exitTextExtra");

    if (humanResult === "Rock" && computerResult === "Rock" || humanResult === "Paper" && computerResult === "Paper" || humanResult === "Scissors" && computerResult === "Scissors" ) {
        roundResult = "Draw";
        roundNumber++;
        console.log("The human players choice was: " + humanResult + " | " + "The Computers choice was: " + computerResult);
        resultPrint.innerText = "No winner - result was draw!";
    } else if (humanResult === "Rock" && computerResult === "Scissors" || humanResult === "Paper" && computerResult === "Rock" || humanResult === "Scissors" && computerResult === "Paper") {
        roundResult = "Human won!";
        humanScore++;
        roundNumber++;
        console.log("The human players choice was: " + humanResult + " | " + "The Computers choice was: " + computerResult);
        resultPrint.innerText = "Human player won the round!";
    } else {
        roundResult = "Computer won!";
        computerScore++;
        roundNumber++;
        console.log("The human players choice was: " + humanResult + " | " + "The Computers choice was: " + computerResult);
        resultPrint.innerText = "CPU won the round!";
    }
    return roundResult;
}   

    function checkWinner() {
        playerScore.innerText = "Player Score: " + humanScore;
        cpuScore.innerText = "CPU Score: " + computerScore;
       
        if(humanScore === 5) {
           alert("The human player won the game!");
            humanScore = 0;
            computerScore = 0;
            playerScore.innerText = "Player Score: " + humanScore;
            cpuScore.innerText = "CPU Score: " + computerScore;
          
        } else if (computerScore === 5) {
            alert("The CPU won the game!");
            humanScore = 0;
            computerScore = 0;  
            playerScore.innerText = "Player Score: " + humanScore;
            cpuScore.innerText = "CPU Score: " + computerScore;
        } 
    }


function displayWinner() {
    const exitText = document.querySelector(".exitText");
    if (humanResult === "Paper" && computerResult == "Scissors" || humanResult === "Scissors" && computerResult === "Paper") {
      exitText.innerText = "Scissor beats paper!";
    } else if (humanResult === "Rock" && computerResult == "Paper" || humanResult === "Paper" && computerResult === "Rock") {
       exitText.innerText = "Paper beats Rock!";
    } else if (humanResult === "Rock" && computerResult == "Scissors" || humanResult === "Scissors" && computerResult === "Rock") {
        exitText.innerText = "Rock beats Scissors!";
    } else  {
        exitText.innerText = "Draw!";
    }
}






  