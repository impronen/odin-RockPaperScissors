let playerScore = 0;

let computerScore = 0;
let roundWinner = "";

document.getElementById("playerScore").innerHTML = playerScore;
document.getElementById("computerScore").innerHTML = computerScore;

// Function for the computer to choose it's play randomly
function computerPlay() {  
    let choice = ['ROCK', 'PAPER', 'SCISSORS'];
    let randomPlay = Math.floor(Math.random() * choice.length);
    return choice[randomPlay]
}


//Player chooses rock
function playerRock()  {
  let playerChoice = "ROCK";
  console.log(`You selected: "${playerChoice}"`);
  let computerSelection = computerPlay();
  console.log(`Computer selected: "${computerSelection}"`);
  
  if (playerChoice === computerSelection) {
    let winner = "TIE";
     roundWinner = winner; 
  }
  else if (computerSelection === "SCISSORS") {
    playerScore++;
    let winner = "you";
    roundWinner = winner; 
  }
  else if (computerSelection === "PAPER") {
    computerScore++;
    let winner = "A I";
    roundWinner = winner; 
  }
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("computerScore").innerHTML = computerScore;

  document.getElementById("playerChoice").innerHTML = playerChoice;
  document.getElementById("computerSelection").innerHTML = computerSelection;

  document.getElementById("roundWinner").innerHTML = roundWinner;
}

//Player chooses paper
function playerPaper()  {
  let playerChoice = "PAPER";
  console.log(`You selected: "${playerChoice}"`);
  let computerSelection = computerPlay();
  console.log(`Computer selected: "${computerSelection}"`);

  if (playerChoice === computerSelection) {
    let winner = "TIE";
    roundWinner = winner; 
  }
  else if (computerSelection === "ROCK") {
    playerScore++;
    let winner = "you";
    roundWinner = winner; 
  }
  else if (computerSelection === "SCISSORS") {
    computerScore++;
    let winner = "A I";
    roundWinner = winner; 
  }
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("computerScore").innerHTML = computerScore;

  document.getElementById("playerChoice").innerHTML = playerChoice;
  document.getElementById("computerSelection").innerHTML = computerSelection;

  document.getElementById("roundWinner").innerHTML = roundWinner;
}

//Player chooses scissors
function playerScissors()  {
  let playerChoice = "SCISSORS";
  console.log(`You selected: "${playerChoice}"`);
  let computerSelection = computerPlay();
  console.log(`Computer selected: "${computerSelection}"`);

  if (playerChoice === computerSelection) {
    let winner = "TIE";
    roundWinner = winner; 
  }
  else if (computerSelection === "PAPER") { 
    playerScore++;
    let winner = "you";
    roundWinner = winner; 
  }
  else if (computerSelection === "ROCK") {
    computerScore++;
    let winner = "A I";
    roundWinner = winner; 
  }
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("computerScore").innerHTML = computerScore;

  document.getElementById("playerChoice").innerHTML = playerChoice;
  document.getElementById("computerSelection").innerHTML = computerSelection;

  document.getElementById("roundWinner").innerHTML = roundWinner;
}

//Reset score

function resetScore () {
  let playerScore = 0;
  let computerScore = 0;

  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("computerScore").innerHTML = computerScore;

  document.getElementById("playerChoice").innerHTML = 0;
  document.getElementById("computerSelection").innerHTML = 0;

  document.getElementById("roundWinner").innerHTML = "";
}

//This function runs the game until one player has 5 points.

function game() { 
  playRound(); // Triggers a single round of gameplay
console.log("Player score "+ playerScore +"");
console.log("Computer score "+computerScore+"");
if (playerScore === 5) {alert ("You win!")}

else if (computerScore === 5)  {alert ("The computer won!")
}
else {
  game(); //Loops to start if neither player has had score up to five.
}

}

