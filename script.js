console.log("Hellow world!");

let choice;
let result;

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);  
    if(choice === 0) {
     result = "Rock";
    } else if (choice === 1) {
     result = "Paper";
    } else {
     result = "Scissors";
    } 
    
    return result;
}



console.log(getComputerChoice());