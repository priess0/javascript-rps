// set up the main game function
function game() {
  // make i variable count towards 6
  for (var i = 0; i < 6; i++)
  // for first 5 tries, play round
  if (i < 5 ){
    playRound()
    console.log(result);
    // log the round number
    console.log("This was round n. " + (i + 1));
    // create a variable for round (from i)
    // save result of the round

  } else {
    // on sixth try, give final message and full results
    console.log("Game Over \n Reload?")
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
    return result = "It's a tie";
  } else if (playerChoice === 1 && computerChoice === 2) {
    return result = "Computer wins";
  } else if (playerChoice === 1 && computerChoice === 3) {
    return result = "Player wins";
  } else if (playerChoice === 2 && computerChoice === 1) {
    return result = "Player wins";
  } else if (playerChoice === 2 && computerChoice === 2) {
    return result = "It's a tie";
  } else if (playerChoice === 2 && computerChoice === 3) {
    return result = "Computer wins";
  } else if (playerChoice === 3 && computerChoice === 1) {
    return result = "Computer wins";
  } else if (playerChoice === 3 && computerChoice === 2) {
    return result = "Player wins";
  } else if (playerChoice === 3 && computerChoice === 3) {
    return result = "It's a tie";
  } else {
    return result = "Something went horribly wrong.";
  }
}

game();
