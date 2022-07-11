let playerScore = 0;
let computerScore = 0;

let roundWinner = "";
let gameWinner = "";
let playerChoice = "";
let playerSelection = "";
let computerSelection = "";


document.getElementById("playerScore").innerHTML = playerScore;
document.getElementById("computerScore").innerHTML = computerScore;
document.getElementById("playerChoice").innerHTML = playerChoice;
document.getElementById("computerSelection").innerHTML = computerSelection;
document.getElementById("roundWinner").innerHTML = roundWinner;
document.getElementById("WINNER").innerHTML = gameWinner;

// Function for the computer to choose it's play randomly
function computerPlay() {  
    let choice = ['rock', 'paper', 'scissors'];
    let randomPlay = Math.floor(Math.random() * choice.length);
    return choice[randomPlay]
}

//Checks the victory condition
function winCondition() {
  if (playerScore === 5) {
    let WIN = "after 5 rounds you are the winner!";
     gameWinner = WIN;
  }
  else if (computerScore === 5)  {
    let WIN = "after 5 rounds the a i is the winner!";
     gameWinner = WIN;
   }
  }

function updateScores () {
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("computerScore").innerHTML = computerScore;
  document.getElementById("roundWinner").innerHTML = roundWinner;
  document.getElementById("gameWinner").innerHTML = gameWinner;
}

//Function that contains the game itself - triggered inside playerselection functions
function game() {
  if (playerChoice === computerSelection) {
    let winner = "nobody";
     roundWinner = winner; 
  }
  else if (computerSelection === "scissors" && playerChoice === "rock") { 
    playerScore++;
    let winner = "you";
    roundWinner = winner; 
  }
  else if ((computerSelection === "scissors" && playerChoice === "paper")) {
    computerScore++;
    let winner = "a i";
    roundWinner = winner; 
  }
  else if (computerSelection === "rock" && playerChoice === "scissors"){
    computerScore++;
    let winner = "a i";
    roundWinner = winner; 
  }
  else if ((computerSelection === "rock" && playerChoice === "paper")) {
    playerScore++;
    let winner = "you";
    roundWinner = winner; 
  }
  else if ((computerSelection === "paper" && playerChoice === "rock")) {
    computerScore++;
    let winner = "a i";
    roundWinner = winner; 
  }
  else if ((computerSelection === "paper" && playerChoice === "scissors")) {
    playerScore++;
    let winner = "you";
    roundWinner = winner; 
  }
}


//Player chooses rock
function playerRock()  {
  playerChoice = "rock";
  computerSelection = "";
  computerSelection = computerPlay();
  
  game(playerChoice, computerSelection)
  winCondition();
  updateScores ();

  document.getElementById("playerChoice").innerHTML = playerChoice;
  document.getElementById("computerSelection").innerHTML = computerSelection;
}

//Player chooses paper
function playerPaper()  {
  playerChoice = "paper";
  computerSelection = "";
  computerSelection = computerPlay();
  
  game(playerChoice, computerSelection)
  winCondition();
  updateScores ()

  document.getElementById("playerChoice").innerHTML = playerChoice;
  document.getElementById("computerSelection").innerHTML = computerSelection;
}

//Player chooses scissors
function playerScissors()  {
  playerChoice = "scissors";
  computerSelection = "";
  computerSelection = computerPlay();
  
  game(playerChoice, computerSelection)
  winCondition();
  updateScores ()

  document.getElementById("playerChoice").innerHTML = playerChoice;
  document.getElementById("computerSelection").innerHTML = computerSelection;
}

//Reset score

function resetScore () {
  playerScore = 0;
  computerScore = 0;
  gameWinner = "";
  

  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("computerScore").innerHTML = computerScore;

  document.getElementById("playerChoice").innerHTML = "";
  document.getElementById("computerSelection").innerHTML = "";

  document.getElementById("roundWinner").innerHTML = "";
  document.getElementById("gameWinner").innerHTML = gameWinner;
}
