let playerScore = 0;
let computerScore = 0;

let roundWinner = "";
let gameWinner = "";
let playerChoice = "";
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

//Player chooses rock
function playerRock()  {
  let playerChoice = "rock";
  let computerSelection = computerPlay();
  
  if (playerChoice === computerSelection) {
    let winner = "nobody";
     roundWinner = winner; 
  }
  else if (computerSelection === "scissors") {
    playerScore++;
    let winner = "you";
    roundWinner = winner; 
  }
  else if (computerSelection === "paper") {
    computerScore++;
    let winner = "a i";
    roundWinner = winner; 
  }

  winCondition();
  updateScores ();

   document.getElementById("playerChoice").innerHTML = playerChoice;
   document.getElementById("computerSelection").innerHTML = computerSelection;
}

//Player chooses paper
function playerPaper()  {
  let playerChoice = "paper";
  let computerSelection = computerPlay();

  if (playerChoice === computerSelection) {
    let winner = "nobody";
    roundWinner = winner; 
  }
  else if (computerSelection === "rock") {
    playerScore++;
    let winner = "you";
    roundWinner = winner; 
  }
  else if (computerSelection === "scissors") {
    computerScore++;
    let winner = "a i";
    roundWinner = winner; 
  }
   winCondition();
   updateScores ()

   document.getElementById("playerChoice").innerHTML = playerChoice;
   document.getElementById("computerSelection").innerHTML = computerSelection;
}

//Player chooses scissors
function playerScissors()  {
  let playerChoice = "scissors";
  let computerSelection = computerPlay();


  if (playerChoice === computerSelection) {
    let winner = "nobody";
    roundWinner = winner; 
  }
  else if (computerSelection === "paper") { 
    playerScore++;
    let winner = "you";
    roundWinner = winner; 
  }
  else if (computerSelection === "rock") {
    computerScore++;
    let winner = "a i";
    roundWinner = winner; 
    
  }
   winCondition();
   updateScores ()

   document.getElementById("playerChoice").innerHTML = playerChoice;
   document.getElementById("computerSelection").innerHTML = computerSelection;
}

//Reset score

function resetScore () {
  let playerScore = 0;
  let computerScore = 0;
  let gameWinner = "";

  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("computerScore").innerHTML = computerScore;

  document.getElementById("playerChoice").innerHTML = "";
  document.getElementById("computerSelection").innerHTML = "";

  document.getElementById("roundWinner").innerHTML = "";
  document.getElementById("gameWinner").innerHTML = gameWinner;
}
