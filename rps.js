// set up function for player's choice
function playerSelection(choice) {
  // set up a condition to check the the player's selection and assign hand the result text string
  // if player types 1, function's result is changed to ROCK
  if (Number(choice) === 1) {
      var choice = "PROCK";
      console.log("Player picked " + choice);
  // if player types 2 function's result is changed to PAPER
  } else if (Number(choice) === 2) {
      var choice = "PPAPER";
      console.log("Player picked " + choice);
  //  if player types 3 function's result is changed to SCISSORS
  } else if (Number(choice) === 3) {
      var choice = "PSCISSORS";
      console.log("Player picked " + choice);
  // if player types anything else, he get's a message
  } else {
      console.log("What the fuck is your problem dude");
  }
}

// prompt player to input his choice
playerSelection(prompt("Choose a number: \n 1 = Rock \n 2 = Paper \n 3 = Scissors"));



// set up function for player's choice
function computerSelection(ai) {
  // set up a condition to check the the player's selection and assign hand the result text string
  // if player types 1, function's result is changed to ROCK
  if (Number(ai) === 1) {
      var ai = "PROCK";
      console.log("Player picked " + ai);
  // if player types 2 function's result is changed to PAPER
  } else if (Number(ai) === 2) {
      var ai = "PPAPER";
      console.log("Player picked " + ai);
  //  if player types 3 function's result is changed to SCISSORS
  } else if (Number(ai) === 3) {
      var ai = "PSCISSORS";
      console.log("Player picked " + ai);
  // if player types anything else, he get's a message
  } else {
      console.log("What the fuck is your problem dude");
  }
}

computerSelection(Math.floor(Math.random() * 3) + 1);





// set up function for computer's choice
//function computerSelection(ai) {
  // set up a condition to check the the computer's selection and assign hand the result text string
  // if computer chooses 1, function's result is changed to ROCK
//  if (Number(ai) === 1) {
//      var ai = "CROCK";
//      console.log("Computer picked " + ai);
  // if computer chooses types 2 function's result is changed to PAPER
//} else if (Number(ai) === 2) {
//      var ai = "CPAPER";
//      console.log("Computer picked " + ai);
  //  if computer chooses 3 function's result is changed to SCISSORS
//} else if (Number(ai) === 3) {
//      var ai = "CSCISSORS";
//      console.log("Computer picked " + ai);
//  }
//}
    // generate random number
//computerChoice(Math.floor(Math.random() * 3) + 1);
//computerChoice(2);


// compare the results of the two functions
  switch (playerSelection, computerSelection) {
    case ("PROCK", "CROCK"):
    console.log("It's a tie");
    break;
    case ("PROCK", "CPAPER"):
    console.log("Computer wins");
    break;
    case ("PROCK", "CSCISSORS"):
    console.log("Player wins");
    break;
    case ("PPAPER", "CROCK"):
    console.log("Player wins");
    break;
    case ("PPAPER", "CPAPER"):
    console.log("It's a tie");
    break;
    case ("PPAPER", "CSCISSORS"):
    console.log("Computer wins");
    break;
    case ("PSCISSORS", "CROCK"):
    console.log("Computer wins");
    break;
    case ("PSCISSORS", "CPAPER"):
    console.log("Player wins");
    break;
    case ("PSCISSORS", "CSCISSORS"):
    console.log("It's a tie");
    break;
  }




// print the result of the game
