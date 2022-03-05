let computerScore = 0;
 
let playerScore = 0;

function game(){

    for (let i=0;(computerScore<3)&&(playerScore<3); i++){
        
        let playerSelection = prompt ("Rock, paper, or scissors?").toLowerCase();
        
        function computerPlay() {         
            const choices = ["paper", "rock", "scissors"];
            let computerSelection = choices[Math.floor(Math.random() * 3)];
            if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
                alert("The computer chose " + computerSelection + ".\nYou win!");
            playerScore++;
            } else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "scissors" && computerSelection == "rock") || (playerSelection == "paper" && computerSelection == "scissors")) {
                alert("The computer chose " + computerSelection + ".\nYou lose!");
                computerScore++;
            } else {
                alert("The computer chose " + computerSelection + ".\nIt's a tie!");
            }
        }
        console.log (computerPlay());
    }
    if (playerScore>computerScore){
       alert ("Final Score:\nPlayer " + playerScore + "\nComputer "+computerScore +"\nYou won the match!");
    } else {
       alert ("Final Score:\nPlayer " + playerScore + "\nComputer "+computerScore +"\nYou have been defeated.");
    }
}
console.log(game());