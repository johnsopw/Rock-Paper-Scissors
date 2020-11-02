
function computerPlay() {
  const choices=["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random()*choices.length)];
    }
  
function playRound(playerSelection, computerSelection){
  switch (playerSelection) {
    case 'rock':
      if (computerSelection === 'paper') {
        return "Tough break! Paper covers rock!";
      } else if (computerSelection === 'scissors') {
        return "Nice! Bash those scissors!";
      }
      break;
    case 'paper':
      if (computerSelection==="rock") {
        return "Well done! Paper covers rock like a Christmas present!";
      } else if (computerSelection === "scissors") {
        return "Well this isn't good. Scissors dice up your paper!";
      }
      break;
    case scissors:
      if (playerSelection === 'paper') {
        return "Oh yeah! Scissors slice up some paper!";
      } else if (playerSelection === 'rock') {
        return "Uh oh! Rock smashes Scissors";
      }
      break;
    default: {
      return "Ah shucks. Looks like this time it was a draw"
    }
  }
}

/*  function playRound(computerSelection, playerSelection) {
      playerSelection = playerSelection.toLowerCase();
      
      if (playerSelection === "rock" && computerSelection === "Paper") {
      return alert("Tough break! Paper covers rock!")
      } else if (playerSelection === "rock" && computerSelection === "Scissors") {
      return alert("Nice! Bash those scissors!")
      } else if (playerSelection === "scissors" && computerSelection === "Rock") {
      return alert("Uh oh! Rock smashes Scissors")
      } else if (playerSelection === "scissors" && computerSelection === "Paper") {
      return alert("Oh yeah! Scissors slice up some paper!")
      } else if (playerSelection === "paper" && computerSelection === "Rock") {
      return alert("Well done! Paper covers rock like a Christmas present!")
      } else if (playerSelection === "paper" && computerSelection === "Scissors") {
      return alert("Well this isn't good. Scissors dice up your paper!")
      }else {
      return alert("It's a draw! Try again");
      } ;
      }
  */
     
      