<<<<<<< HEAD

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
     
      
=======
function computerPlay() {
  const choices=["Rock", "Paper", "Scissors"];
  let rps= choices[Math.floor(Math.random()*choices.length)];
  return rps;
  }
  

const computerSelection=computerPlay();
let playerSelection = prompt("Choose your weapon: Rock, Paper, or Scissors?");

  function playRound(computerSelection, playerSelection) {
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
      
      
      
   

 
 /* Old version
 function playRound(computerSelection, playerSelection) {
    let computerSelection=computerPlay();
    let playerChoice= prompt("Choose your weapon: Rock, Paper, or Scissors?");
     
      let playerSelection = playerChoice.toLowerCase();
      if (playerSelection !== "rock"||playerSelection !== "paper"||playerSelection !== "scissors") {
        return prompt("Invalid selection. You must choose Rock, Paper, or Scissors!");
        }
        ;
        
        */
      switch (playerSelection) {
        case "rock" :
          if (computerSelection == "rock"){
          alert("Draw. Try again!");
          return "Draw. Try again!";}
          else if (computerSelection == "paper"){
          alert("Oh no! Paper beats rock!");
          return "Oh no! Paper beats rock!";}
          } else if (computerSelection=="scissors") {
          return "Oh yeah! Rock smashes scissors!"; 
          };
          break
      
    
>>>>>>> 8e7431731f84c002439199b2cfd322637d8fe491
