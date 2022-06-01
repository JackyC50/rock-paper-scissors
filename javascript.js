function computerPlay () { //randomizes what the computer chooses
 const randomNumber = (Math.floor(Math.random() * 3))
 if (randomNumber === 0) {
  return 'rock';
 } else if (randomNumber === 1) {
  return 'paper';
 } else if (randomNumber === 2)
  return 'scissor';
 }

function playRound (playerSelection, computerSelection) { //creates the logic for the game
 if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissor') {
 return 'You lose! Scissor beats paper!';
} else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
 return 'You win! Paper beats rock!';
} else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
 return 'You lose! Paper beats rock!';
} else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissor') {
 return 'You win! Rock beats scissor!';
} else if (playerSelection.toLowerCase() === 'scissor' && computerSelection === 'rock') {
 return 'You lose! Rock beats scissor!';
} else if (playerSelection.toLowerCase() === 'scissor' && computerSelection === 'paper') {
 return 'You win! Scissor beats paper!'; 
} else {
 return 'It\'s a tie!';
}
}

const playerSelection = prompt('Choose your weapon'); //Player selection currently
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

function game() { //displays results of 5 round game
 const computerSelection = computerPlay();
 console.log(playRound(playerSelection, computerSelection));
}

