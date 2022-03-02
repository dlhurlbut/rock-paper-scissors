let playerSelection = prompt ("Rock, paper, or scissors?").toLowerCase();

let computerPlay = function() {
    const choices = ["paper", "rock", "scissors"];
    let computerSelection = choices[Math.floor(Math.random()*3)];
    alert (("The computer chose ") + computerSelection + ("."));
    if ((playerSelection == "rock" && computerSelection == "scissors")|| (playerSelection == "scissors" && computerSelection == "paper")|| (playerSelection == "paper" && computerSelection == "rock")) {
        alert ("You win!");
    } else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "scissors" && computerSelection == "rock") || (playerSelection == "paper" && computerSelection == "scissors")) {
        alert ("You lose!");
    } else {alert ("It's a tie!")
    }
}

console.log(computerPlay());
    
       
           


