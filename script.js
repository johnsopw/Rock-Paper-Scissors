

function computerPlay() {
  const choices=["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random()*choices.length)];
    }
  
function playRound(playerSelection, computerSelection){
  playerSelection = prompt("Choose your weapon. Rock, paper, or scissors!");
  computerSelection = computerPlay();
  switch (playerSelection.toLowerCase()) {
    case "rock":
      if (computerSelection === "paper") {
        return "Tough break! Paper covers rock!";
      } else if (computerSelection === "scissors") {
        return "Nice! Bash those scissors!";
      } else {
        return "It's a draw this time. You got lucky!";
      }
      break;
    case "paper":
      if (computerSelection==="rock") {
        return "Well done! Paper covers rock like a Christmas present!";
      } else if (computerSelection === "scissors") {
        return "Well this isn't good. Scissors dice up your paper!";
      } else {
        return "It's a draw this time. You got lucky!";
      }
      break;
    case "scissors":
      if (playerSelection === "paper") {
        return "Oh yeah! Scissors slice up some paper!";
      } else if (playerSelection === "rock") {
        return "Uh oh! Rock smashes Scissors";
      } else {
        return "It's a draw this time. You got lucky!";
      }
      break;
    default: {
      return alert("Ah shucks. You done input the wrong weapon. Try it again. Rock, Paper, or Scissors?");
    }
  }
}

function game() {
let i;
for (i=0; i<5; i++){
  console.log(playRound());
} ;
}



     

