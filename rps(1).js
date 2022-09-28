

    let i = 0;
    let playerScore = 0;
    let computerScore = 0;
    let finalResult = "";
    let clickedOnce = false;







  // set up the main game function
  function game(value) {
    let playerWin = "Round n. " + (i+1) + " result: Player wins";
    let computerWin = "Round n. " + (i+1) + " result: Computer wins";
    let tieGame = "Round n. " + (i+1) + " result: Tie!";
    let logResult = "";

    // add log to html code
    function htmlLog(htmlContent) {
      const log = document.createElement("div");
      const logContent = document.createTextNode(htmlContent);
      log.appendChild(logContent);
      const logWindow = document.getElementById("logWindow");
      logWindow.appendChild(log);
    }



    // set up the game function
    function playRound(value) {

        // set up function for computer's randomized choice
        function computerSelection(choice) {
          if (Number(choice) === 1) {
              return computerChoice = "Rock";
        } else if (Number(choice) === 2) {
              return computerChoice = "Paper";
        } else if (Number(choice) === 3) {
              return computerChoice = "Scissors";
          } else {
              return computerChoice = "Run, the machine is smarter than us!";
          }
        }

        // set up a condition to check the the player's selection and assign hand the result text string
        function playerSelection (choice) {
            if (choice === 1) {
                return playerChoice = "Rock";
            } else if (Number(choice) === 2) {
                return playerChoice = "Paper";
            } else if (Number(choice) === 3) {
                return playerChoice = "Scissors";
          } else {
                return playerChoice = "What the fuck is your problem dude";
            }
          }

          // launch and display player and computer selection
          playerSelection(Number(value.target.value));
          playerDiv.textContent = (playerChoice);
          let ai = Math.floor(Math.random() * 3) + 1;
          computerSelection(ai);
          computerDiv.textContent = (computerChoice);

          // compare the results of the two functions
          if (Number(value.target.value) === 1 && ai === 1) {
            logResult = tieGame;
            htmlLog(logResult);
            return result = "Tie";
          } else if (Number(value.target.value) === 1 && ai === 2) {
            logResult = computerWin;
            htmlLog(logResult);
            return result = "Computer";
          } else if (Number(value.target.value) === 1 && ai === 3) {
            logResult = playerWin;
            htmlLog(logResult);
            return result = "Player";
          } else if (Number(value.target.value) === 2 && ai === 1) {
            logResult = playerWin;
            htmlLog(logResult);
            return result = "Player";
          } else if (Number(value.target.value) === 2 && ai === 2) {
            logResult = tieGame;
            htmlLog(logResult);
            return result = "Tie";
          } else if (Number(value.target.value) === 2 && ai === 3) {
            logResult = computerWin;
            htmlLog(logResult);
            return result = "Computer";
          } else if (Number(value.target.value) === 3 && ai === 1) {
            logResult = computerWin;
            htmlLog(logResult);
            return result = "Computer";
          } else if (Number(value.target.value) === 3 && ai === 2) {
            logResult = playerWin;
            htmlLog(logResult);
            return result = "Player";
          } else if (Number(value.target.value) === 3 && ai === 3) {
            logResult = tieGame;
            htmlLog(logResult);
            return result = "Tie";
          } else {
            logResult = "ERROR";
            htmlLog(logResult);
            return result = "Error";
          }
    // end of playRound function
    }





    // game winner
    function gameWinner() {
      const resultDiv = document.getElementById('resultDiv');
      finalResult = document.createElement("div");
      finalResult.setAttribute ("class", "finalResult d-flex");
      finalResult.setAttribute ("id", "finalResult");
      resultDiv.appendChild(finalResult);



      if (playerScore > computerScore) {
        console.log("Player Wins")
        finalResult.textContent = "PLAYER WINS THE GAME";
      } else if (computerScore > playerScore) {
        console.log("Computer Wins")
        finalResult.textContent = "COMPUTER WINS THE GAME";
      } else if (computerScore == playerScore) {
        console.log("It's a tie")
        finalResult.textContent = "THE GAME ENDS IN A TIE";
      } else {
        console.log("Something went wrong")
        finalResult.textContent = "SOMETHING WENT HORRIBLY WRONG";
      }

    }

    i++
    roundDiv.textContent = i;
    if (i <= 5) {
      playRound(value)
      console.log(i)
      // count the score
      if (result === "Computer") {
        computerScore = ++computerScore;
      } else if (result === "Player") {
        playerScore = ++playerScore;
      }
      roundResult(i);
      // round results function
      function roundResult(roundNumber) {
        switch (Number(roundNumber)) {
          case 1:
            return roundOne = result;
            break;
          case 2:
            return roundTwo = result;
            break;
          case 3:
            return roundThree = result;
            break;
          case 4:
            return roundFour = result;
            break;
          case 5:
            return roundFive = result;
            break;
        }
      }

      // display round information
      infoDiv1.textContent = playerScore;
      infoDiv2.textContent = ":";
      infoDiv3.textContent = computerScore;

      // first round setup
      if (i === 1) {
        roundHeader.textContent = ("ROUND");
        playerHeader.textContent = ("PLAYER");
        computerHeader.textContent = ("COMPUTER");
        infoHeader1.textContent = ("Player");
        infoHeader2.textContent = (":");
        infoHeader3.textContent = ("Computer");
        if (finalResult != 0) {
          finalResult.remove();
        }
      }


      // final round setup
      if (i === 5) {
        console.log("disabled!");
        for (let dis = 0; dis < buttons.length; dis++) {
            buttons[dis].setAttribute("disabled", "");
            buttons[dis].setAttribute("style", "filter:grayscale(1); max-width: 200px;")
        }
        const resultMsg = document.createElement("div");
        const resultContent = document.createTextNode("Game Over");
        resultMsg.appendChild(resultContent);
        htmlLog("GAME OVER");
        htmlLog("Player " + playerScore + " : Computer " + computerScore);
        const log = document.createElement("hr");
        const logWindow = document.getElementById("logWindow");
        logWindow.appendChild(log);

        //create retry button
        const buttonsDiv = document.getElementById('buttonsDiv');
        const retryAdd = document.createElement("input");
        retryAdd.setAttribute ("type", "image");
        retryAdd.setAttribute ("name", "retryButton");
        retryAdd.setAttribute ("style", "max-width: 100px; position: absolute; left: 50%; transform: translate(-50%);");
        retryAdd.setAttribute ("src", "./images/retry.png");
        retryAdd.setAttribute ("id", "retryButton");
        buttonsDiv.appendChild(retryAdd);

        const retryButton = document.getElementById('retryButton');
        retryButton.addEventListener('click', retry);
        gameWinner();

      }






  }
}


// set up retry function
function retry() {
  // clear function for when game ends
  function clearInfo() {
    infoDiv1.textContent = "";
    infoDiv3.textContent = "";
    playerDiv.textContent = "";
    computerDiv.textContent = "";
    infoDiv1.textContent = "";
    infoDiv2.textContent = "";
    infoDiv3.textContent = "";
    roundDiv.textContent = "";
    roundHeader.textContent = ("New Game");
    playerHeader.textContent = ("");
    computerHeader.textContent = ("");
    infoHeader1.textContent = ("");
    infoHeader2.textContent = ("");
    infoHeader3.textContent = ("");
  }

  for (let dis = 0; dis < buttons.length; dis++) {
      buttons[dis].disabled = false;
      buttons[dis].setAttribute("style", "filter:grayscale(0); max-width: 200px;")
      //buttons[dis].setAttribute("style", "max-width: 200px;")
  }
  i = 0;
  playerScore = 0;
  computerScore = 0;
  const retryAdd = document.getElementById('retryButton');
  retryAdd.remove();
  clearInfo()
}







  const buttons = document.getElementsByName('button');

  const buttonImg = document.getElementsByClassName('buttonImg')
  const roundDiv = document.getElementById('round');
  const playerDiv = document.getElementById('player');
  const computerDiv = document.getElementById('computer');
  const infoDiv1 = document.getElementById('info1');
  const infoDiv2 = document.getElementById('info2');
  const infoDiv3 = document.getElementById('info3');
  const roundHeader = document.getElementById('roundHeader');
  const playerHeader = document.getElementById('playerHeader');
  const computerHeader = document.getElementById('computerHeader');
  const infoHeader1 = document.getElementById('infoHeader1');
  const infoHeader2 = document.getElementById('infoHeader2');
  const infoHeader3 = document.getElementById('infoHeader3');
  const retryDiv = document.getElementById('retryDiv');





  //buttons.setAttribute("disabled", "");
  //buttonImg.setAttribute("filter", "grayscale(100%)");
  //buttonImg.style.width = "100px";



  buttons.forEach((button) => {
    button.addEventListener('click', game);
  });
