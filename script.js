let playerScore = 0;
let computerScore = 0; 

function getComputerSelection() {
    let options = ['rock', 'paper', 'scissors'];
    return options[getRandomNum()];
}

function getRandomNum() {
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection) {
    let computerSelection = getComputerSelection();
    if (playerSelection == computerSelection) {
        roundResult.innerHTML = "It's a tie. Try again!";
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            roundResult.innerHTML = "You Lose! Paper beats Rock.";
            computerScore++;
      }  else {
        roundResult.innerHTML = "You Win! Rock Beats Scissors";
        playerScore++;
        }
        
     } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            roundResult.innerHTML = "You Win! Paper Beats Rock.";
            playerScore++;
        } else {
            roundResult.innerHTML = "You Lose! Scissors beats Paper."
            computerScore++;
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            roundResult.innerHTML = "You Lose! Rock Beats Scissors!";
            computerScore++;
        } else {
            roundResult.innerHTML = "You Win! Scissors beats Paper.";
            playerScore++;
        }
    }
    document.querySelector("#player-score span").innerHTML = playerScore;
    document.querySelector("#computer-score span").innerHTML = computerScore; 
    determineWinner(playerScore, computerScore);
}

function determineWinner(playerScore, computerScore) {
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore> computerScore) {
        document.querySelector("#game-winner span").innerHTML = "Congrats! You Win the Game!";
        } else if (computerScore > playerScore) {
        document.querySelector("#game-winner span").innerHTML = "Too Bad! Computer wins. Try again next time.";
        } else if (playerScore == computerScore) {
        document.querySelector("#game-winner span").innerHTML = "Sorry! It's a tie."; 
        }
    }
    
}

const roundResult = document.querySelector("#round-result span");
const btn = document.querySelectorAll("button");

btn.forEach((button) => {
    button.addEventListener('click', function(){playRound(button.value)});
});