let computerScore = 0;
 
let playerScore = 0;

function game(){

    for (let i=0;(computerScore<3)&&(playerScore<3); i++){
        
        let playerSelection = prompt ("Rock, paper, or scissors?").toLowerCase();
        
        function computerPlay() {         
            const choices = ["paper", "rock", "scissors"];
            let computerSelection = choices[Math.floor(Math.random() * 3)];
            alert(("The computer chose ") + computerSelection + ("."));
            if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
                alert("You win!");
            playerScore++;
            } else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "scissors" && computerSelection == "rock") || (playerSelection == "paper" && computerSelection == "scissors")) {
                alert("You lose!");
                computerScore++;
            } else {
                alert("It's a tie!");
            }
        }
        console.log (computerPlay());
    }
}