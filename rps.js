

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


    // animation
    
    function removeTransition(e) {
      e.target.classList.remove('playing', 'playingRock');
    }
    
    function animationClick(e) {
      if (e.target.id == "rock") {
        e.target.classList.add("playingRock")
      } else {
      e.target.classList.add("playing")
      }
    }
    animationClick(value);

    buttons.forEach(button => button.addEventListener('transitionend', removeTransition));




    // add log to html code
    function htmlLog(htmlContent) {
      const log = document.createElement("div");
      const logContent = document.createTextNode(htmlContent);
      log.appendChild(logContent);
      logWindow.appendChild(log);
      logWindow.scrollTop = logWindow.scrollHeight;
    }

    // aggregate log functions
    function matchLog() {
      htmlLog("Round " + (i));
      htmlLog("Player chose: " + playerChoice);
      htmlLog("Computer chose: " + computerChoice);
      htmlLog(logResult);
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


          // winner lights up
          function winnerLight(winner, winnerChoice) {
            playerHeader.classList.remove("winner")
            computerHeader.classList.remove("winner")
            playerDiv.classList.remove("winner")
            computerDiv.classList.remove("winner")
            beats.classList.remove("winner")
            if (winner == "tie") {
                beats.classList.add("winner");
            } else {
                winner.classList.add("winner");
                winnerChoice.classList.add("winner");
            }
          }


          // compare the results of the two functions
          if (Number(value.target.value) === 1 && ai === 1) {
            logResult = tieGame;
            winnerLight("tie", "tie");
            matchLog();
            return result = "Tie";
          } else if (Number(value.target.value) === 1 && ai === 2) {
            logResult = computerWin;
            winnerLight(computerHeader, computerDiv);
            matchLog();
            return result = "Computer";
          } else if (Number(value.target.value) === 1 && ai === 3) {
            logResult = playerWin;
            winnerLight(playerHeader, playerDiv);
            matchLog();
            return result = "Player";
          } else if (Number(value.target.value) === 2 && ai === 1) {
            logResult = playerWin;
            winnerLight(playerHeader, playerDiv);
            matchLog();
            return result = "Player";
          } else if (Number(value.target.value) === 2 && ai === 2) {
            logResult = tieGame;
            winnerLight("tie", "tie");
            matchLog();
            return result = "Tie";
          } else if (Number(value.target.value) === 2 && ai === 3) {
            logResult = computerWin;
            winnerLight(computerHeader, computerDiv);
            matchLog();
            return result = "Computer";
          } else if (Number(value.target.value) === 3 && ai === 1) {
            logResult = computerWin;
            winnerLight(computerHeader, computerDiv);
            matchLog();
            return result = "Computer";
          } else if (Number(value.target.value) === 3 && ai === 2) {
            logResult = playerWin;
            winnerLight(playerHeader, playerDiv);
            matchLog();
            return result = "Player";
          } else if (Number(value.target.value) === 3 && ai === 3) {
            logResult = tieGame;
            winnerLight("tie", "tie");
            matchLog();
            return result = "Tie";
          } else {
            logResult = "ERROR";
            winnerLight(error);
            matchLog();
            return result = "Error";
          }
    // end of playRound function
    }





    // game winner
    function gameWinner() {

      finalResult = document.createElement("div");
      finalResult.setAttribute ("class", "finalResult, winner");
      finalResult.setAttribute ("id", "finalResult");
      resultDiv.appendChild(finalResult);



      if (playerScore > computerScore) {
        finalResult.textContent = "PLAYER WON THE GAME";
      } else if (computerScore > playerScore) {
        finalResult.textContent = "COMPUTER WON THE GAME";
      } else if (computerScore == playerScore) {
        finalResult.textContent = "THE GAME ENDED A TIE";
      } else {
        finalResult.textContent = "SOMETHING WENT HORRIBLY WRONG";
      }

    }

    i++
    roundDiv.textContent = i;
    if (i <= 5) {
      playRound(value)
      // count the score
      if (result === "Computer") {
        computerScore = ++computerScore;
        beats.textContent = "<";

      } else if (result === "Player") {
        playerScore = ++playerScore;
        beats.textContent = ">";
      } else if (result === "Tie") {
        beats.textContent = "TIE";
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
        for (let dis = 0; dis < buttons.length; dis++) {
            buttons[dis].setAttribute("disabled", "");
            buttons[dis].setAttribute("style", "filter:grayscale(1); max-width: 200px;")
        }
        infoDiv1.classList.add("winnerScore");
        infoDiv2.classList.add("winnerScore");
        infoDiv3.classList.add("winnerScore");
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
    infoDiv1.classList.remove("winnerScore")
    infoDiv2.classList.remove("winnerScore")
    infoDiv3.classList.remove("winnerScore")
    roundDiv.textContent = "";
    roundHeader.textContent = ("");
    playerHeader.textContent = ("");
    computerHeader.textContent = ("");
    infoHeader1.textContent = ("");
    infoHeader2.textContent = ("");
    infoHeader3.textContent = ("");
    beats.textContent = ("");
  }

  for (let dis = 0; dis < buttons.length; dis++) {
      buttons[dis].disabled = false;
      buttons[dis].setAttribute("style", "filter:grayscale(0); max-width: 200px;")
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
  const logWindow = document.getElementById("logWindow");
  const resultDiv = document.getElementById('resultDiv');
  const beats = document.getElementById('beats');






  buttons.forEach((button) => {
    button.addEventListener('click', game);
  });