/*

The UI - three buttons that listen to start game function. Score counter.
Event listener for wictory, which notifyies about win somehow.
Score counter for both players and reset, for reseting both.

*/

// Set initial score when loading the program
let playerScore = 0;
let computerScore = 0;

// Function for the computer to choose it's play randomly
function computerPlay() {  
    let choice = ['ROCK', 'PAPER', 'SCISSORS'];
    let randomPlay = Math.floor(Math.random() * choice.length);
    return choice[randomPlay]
}

// Promt for the user to input their play + turn it to uppercase
function playerPlay() { 
 const ask = prompt("Rock, Paper, or Scissors?").toUpperCase();
 return ask; }

//Functions for player buttons

function playerRock()  {
  let playerChoice = "ROCK";
  console.log(`You selected: "${playerChoice}"`);
  let computerSelection = computerPlay();
  console.log(`Computer selected: "${computerSelection}"`);
}

function playerPaper()  {
  let playerChoice = "PAPER";
  console.log(`You selected: "${playerChoice}"`);
  let computerSelection = computerPlay();
  console.log(`Computer selected: "${computerSelection}"`);
}

function playerScissors()  {
  let playerChoice = "SCISSORS";
  console.log(`You selected: "${playerChoice}"`);
  let computerSelection = computerPlay();
  console.log(`Computer selected: "${computerSelection}"`);
}

// Play one round

 function playRound() {        
  /*
    let playerSelection = playerPlay();
  
    let playerChoice = playerSelection;
    let computerSelection = computerPlay(); // Runs computerPlay and sets it as

    console.log(`You selected: "${playerChoice}"`);
    console.log(`Computer selected: "${computerSelection}"`);
  */
//Nested if statements to see which one wins + add 1 to score for the winner

    if (playerChoice === computerSelection) {
    alert ("Its a tie! Player score is "+ playerScore +". Computer score is "+computerScore+".")

  } else if (playerChoice === "ROCK" && computerSelection === "PAPER") {
    computerScore++;
    alert ("Computer wins this round. Player score is "+ playerScore +". Computer score is "+computerScore+".");

  } else if (playerChoice === "ROCK" && computerSelection === "SCISSORS") {
    playerScore++;
    alert ("Player wins this round. Player score is "+ playerScore +". Computer score is "+computerScore+".");

  } else if (playerChoice === "PAPER" && computerSelection === "SCISSORS") {
    computerScore++;
    alert ("Computer wins this round. Player score is "+ playerScore +". Computer score is "+computerScore+".");

  } else if (playerChoice === "PAPER" && computerSelection === "ROCK") {
    playerScore++;
    alert ("Player wins this round. Player score is "+ playerScore +". Computer score is "+computerScore+".");

  } else if (playerChoice === "SCISSORS" && computerSelection === "ROCK") {
    computerScore++;
    alert ("Computer wins this round. Player score is "+ playerScore +". Computer score is "+computerScore+".");

  } else if (playerChoice === "SCISSORS" && computerSelection === "PAPER") {
    playerScore++;
    alert ("Player wins this round. Player score is "+ playerScore +". Computer score is "+computerScore+".");

  }
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

