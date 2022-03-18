let computerScore = 0;
let playerScore = 0;
function playGame(playerSelection) { 
    const choices = ["paper", "rock", "scissors"];
    var winModal = document.getElementById("winModal");
    var loseModal = document.getElementById("loseModal");
    var wspan = document.getElementsByClassName("wclose")[0];
    var lspan = document.getElementsByClassName("lclose")[0];
    for (let i=0;(computerScore<5)&&(playerScore<5); i++){
        let computerSelection = choices[Math.floor(Math.random() * choices.length)];
        if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
            document.getElementById('winnerDeclaration').textContent = "You win!";
            playerScore++;
        } else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "scissors" && computerSelection == "rock") || (playerSelection == "paper" && computerSelection == "scissors")) {
            document.getElementById('winnerDeclaration').textContent = "You lose";
            computerScore++;
        } else {
            document.getElementById('winnerDeclaration').textContent = "It's a tie";
        }
        if (computerSelection === "rock") {
            document.getElementById("computerPicture").src ="rps-images/rock.png";
        } else if (computerSelection === "paper") {
            document.getElementById("computerPicture").src ="rps-images/paper.png";
        } else {
            document.getElementById("computerPicture").src ="rps-images/scissors.png";
        }
        if (playerScore === 1) {
            document.getElementById("play-score").src ="rps-images/player1.png"; 
        }else if (playerScore === 2) {
            document.getElementById("play-score").src ="rps-images/player2.png";
        }else if (playerScore === 3) {
            document.getElementById("play-score").src ="rps-images/player3.png";
        }else if (playerScore === 4) {
            document.getElementById("play-score").src ="rps-images/player4.png";
        }else if (playerScore === 5) {
            document.getElementById("play-score").src ="rps-images/player5.png";
            setTimeout(function() {
                winModal.style.display = "block";
            },150);
            wspan.onclick = function() {
                winModal.style.display = "none";
                window.location.reload();
            }
        } else {
            document.getElementById("play-score").src ="";
        }
        if (computerScore === 1) {
            document.getElementById("comp-score").src ="rps-images/computer1.png"; 
        }else if (computerScore === 2) {
            document.getElementById("comp-score").src ="rps-images/computer2.png"; 
        }else if (computerScore === 3) {
            document.getElementById("comp-score").src ="rps-images/computer3.png"; 
        }else if (computerScore === 4) {
            document.getElementById("comp-score").src ="rps-images/computer4.png"; 
        }else if (computerScore === 5) {
            document.getElementById("comp-score").src ="rps-images/computer5.png";
            setTimeout(function() {
                //alert ("You have been defeated.");
                loseModal.style.display = "block";
            },150);        
            lspan.onclick = function() {
                loseModal.style.display = "none";
                window.location.reload();
            }
        }else{
            document.getElementById("comp-score").src ="";
        }
        if ((playerScore!=5)&&(computerScore!=5)) {
            break;
        }
    }
}
