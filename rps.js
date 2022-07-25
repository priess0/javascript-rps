// set up the main game function
function game() {
  // set up variable for score before the loop
  var playerScore = 0;
  var computerScore = 0;
  // make i variable count towards 6
  for (var i = 0; i < 6; i++)
  // for first 5 tries, play round
  if (i < 5 ){
    playRound()
    // check the round result for correct message in log
    if (result === "Error") {
      console.log("Something went horribly wrong.")
    } else  if  (result === "Tie") {
      console.log("It's tie.")
    } else {
    console.log(result + " wins");
    }
    // log the round number
    console.log("This was round n. " + (i + 1));

    // create a variable for round
    // save result of the round
    switch (i) {
      case 0:
        roundOne = result;
        break;
      case 1:
        roundTwo = result;
        break;
      case 2:
        roundThree = result;
        break;
      case 3:
        roundFour = result;
        break;
      case 4:
        roundFive = result;
        break;
    }
    // count the score
    if (result === "Computer") {
      var computerScore = ++computerScore;
    } else if (result === "Player") {
      var playerScore = ++playerScore;
    }
  } else {
    // on sixth try, give final message and full results
    console.log("Game Over \nResults:\n Round 1: " + roundOne + "\n Round 2: " + roundTwo + "\n Round 3: " + roundThree + "\n Round 4: " + roundFour + "\n Round 5: " + roundFive + "\n\nPlayer:Computer\n     " + playerScore + ":" + computerScore);
  }
}

// set up function for player's choice prompt
function playerSelection (choice = Number(prompt("Choose a number: \n 1 = Rock \n 2 = Paper \n 3 = Scissors"))) {
    console.log(choice);
    // set up a condition to check the the player's selection and assign hand the result text string
    // if player types 1, function's result is changed to ROCK
    if (Number(choice) === 1) {
        return playerChoice = choice;
        console.log("Player picked ROCK");
    // if player types 2 function's result is changed to PAPER
    } else if (Number(choice) === 2) {
        return playerChoice = choice;
        console.log("Player picked PAPER");
    //  if player types 3 function's result is changed to SCISSORS
    } else if (Number(choice) === 3) {
        return playerChoice = choice;
        console.log("Player picked SCISSORS");
    // if player types anything else, he get's a message
  } else {
        console.log("What the fuck is your problem dude");
        return playerChoice = choice;
    }
  }


// set up function for computer's randomized choice
function computerSelection(ai = Math.floor(Math.random() * 3) + 1) {
  if (Number(ai) === 1) {
      return computerChoice = ai;
      console.log("Player picked ROCK");
  // if player types 2 function's result is changed to PAPER
  } else if (Number(ai) === 2) {
      return computerChoice = ai;
      console.log("Player picked PAPER");
  //  if player types 3 function's result is changed to SCISSORS
  } else if (Number(ai) === 3) {
      return computerChoice = ai;
      console.log("Player picked SCISSORS");
  // if player types anything else, he get's a message
  } else {
      console.log("Run the machine is getting smarter than us!");
      return computerChoice = ai;
  }

}

// set up the game function
function playRound() {
  // launch and log player selection
  playerSelection();
  console.log(typeof(playerChoice));
  console.log("Player chose " + playerChoice);
  // launch and log computer selection
  computerSelection();
  console.log(typeof(computerChoice));
  console.log("Computer chose " + computerChoice);
// compare the results of the two functions
  if (playerChoice === 1 && computerChoice === 1) {
    return result = "Tie";
  } else if (playerChoice === 1 && computerChoice === 2) {
    return result = "Computer";
  } else if (playerChoice === 1 && computerChoice === 3) {
    return result = "Player";
  } else if (playerChoice === 2 && computerChoice === 1) {
    return result = "Player";
  } else if (playerChoice === 2 && computerChoice === 2) {
    return result = "Tie";
  } else if (playerChoice === 2 && computerChoice === 3) {
    return result = "Computer";
  } else if (playerChoice === 3 && computerChoice === 1) {
    return result = "Computer";
  } else if (playerChoice === 3 && computerChoice === 2) {
    return result = "Player";
  } else if (playerChoice === 3 && computerChoice === 3) {
    return result = "Tie";
  } else {
    return result = "Error";
  }
}

game();
