let computerChoice;
let computerResult;
let humanChoice;
let humanResult;
let computerScore = 0;
let humanScore = 0;
let roundResult;
let scoreResult;

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
/*
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
   */ 
        function getHumanChoice() {
   
            humanChoice = prompt("Rock, Paper or Scissors?");
        let humanChoiceLC = humanChoice?.toLowerCase();
            while(humanChoice != null) {
                if (humanChoiceLC === "rock") {
                    humanResult = "Rock";
                } else if (humanChoiceLC === "paper") {
                    humanResult = "Paper";
                } else if (humanChoiceLC === "scissors") {
                    humanResult = "Scissors";
                } else {
                    humanResult =  alert("Incorrect choice, please use only one the three choices available!");
                }
                return humanResult;
            }
            }



    function playRound(humanResult,computerResult) {
        if (humanResult === "Rock" && computerResult === "Rock" || humanResult === "Paper" && computerResult === "Paper" || humanResult === "Scissors" && computerResult === "Scissors" ) {
            roundResult = "Draw";
        } else if (humanResult === "Rock" && computerResult === "Scissors" || humanResult === "Paper" && computerResult === "Rock" || humanResult === "Scissors" && computerResult === "Paper") {
            roundResult = "Human won!";
            humanScore++;
        } else {
            roundResult = "Computer won!";
            computerScore++;
        }
        return roundResult;
    }   


    function playGame(times) {
        for (let i = 1; i <= times; i++) {
            let humanSelection = getHumanChoice();
            let computerSelection = getComputerChoice();
            console.log(playRound(humanSelection, computerSelection));
            console.log(humanScore, computerScore);
        }
        if (humanScore > computerScore) {
            console.log("Human player won the game! Score for the human player: " + humanScore + " Score for the computer: " + computerScore);
        } else if (humanScore < computerScore){
            console.log("Computer won the game! Score for the computer: " + computerScore + " Score for the human player: " + humanScore);
        } else {
            console.log("No winner, the result of the game was draw! Play again.");
        }
    }

    playGame(5);

        


    


  