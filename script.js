let computerChoice;
let computerResult;
let humanChoice;
let humanResult;
let computerScore = 0;
let humanScore = 0;
let roundResult;
let scoreResult;
let roundNumber = 0;

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
            roundNumber++;
            console.log("The human players choice was: " + humanResult + " | " + "The Computers choice was: " + computerResult);
        } else if (humanResult === "Rock" && computerResult === "Scissors" || humanResult === "Paper" && computerResult === "Rock" || humanResult === "Scissors" && computerResult === "Paper") {
            roundResult = "Human won!";
            humanScore++;
            roundNumber++;
            console.log("The human players choice was: " + humanResult + " | " + "The Computers choice was: " + computerResult);
        } else {
            roundResult = "Computer won!";
            computerScore++;
            roundNumber++;
            console.log("The human players choice was: " + humanResult + " | " + "The Computers choice was: " + computerResult);
        }
        return roundResult;
    }   


    function playGame(times) {
        for (let i = 1; i <= times; i++) {
            console.log("The round begins: ");
            let humanSelection = getHumanChoice();
            let computerSelection = getComputerChoice();
            console.log("Outcome: " + playRound(humanSelection, computerSelection));
            console.log("Round " + roundNumber + " ||  Total score || Player : " + humanScore + " || Computer: " + computerScore);
        }
        if (humanScore > computerScore) {
            console.log("FINISH! - Human player won the game! Final score for the human player: " + humanScore + " Final score for the computer: " + computerScore);
        } else if (humanScore < computerScore){
            console.log("FINISH! - Computer won the game! Final score for the computer: " + computerScore + " Final score for the human player: " + humanScore);
        } else {
            console.log("FINISH! - No winner, the end result of the game was draw! Play again.");
        }
    }

    playGame(5);

        


    


  