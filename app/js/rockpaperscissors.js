////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput(); //returns player move if move is defined OR prompts 'getInput()' if move is not defined.
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay(); //returns computer move if defined OR prompts computer to 'randomPlay()' again.
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove){
        console.log('Its a Tie!');
    } else if(playerMove === 'rock' && computerMove === 'scissors'){
        winner = 'Player';
    } else if(playerMove === 'scissors' && computerMove === 'rock'){
        winner = 'Computer';
    } else if(playerMove === 'paper' && computerMove === 'rock'){
        winner = 'Player';
    } else if(playerMove === 'rock' && computerMove === 'paper'){
        winner = 'Computer';
    } else if(playerMove === 'paper' && computerMove === 'scissors'){
        winner = 'Computer';
    } else if(playerMove === 'scissors' && computerMove === 'paper'){
        winner = 'Player';
    }
    return winner; //compares player and computer moves to determine winner, prints out result to console.
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while ((playerWins < 5) && (computerWins < 5)) {  //winner counter.
      var playerMove = getPlayerMove();  //defines the player move by getting the move from function getPlayerMove.
      var computerMove = getComputerMove();  //defines the computer move by getting the move from function getComputerMove.
      var winner = getWinner(playerMove, computerMove);  //defines the winner move by getting the result from function getWinner.
      console.log ("Player chose " + playerMove + ".");  //prints player's choice.
      console.log ("Computer chose " + computerMove + ".");  //prints computer's random choice.
        if (winner === 'Player') {  //executes function by finding winner, adding 1 to the tally and printing the result.
            playerWins += 1;
            console.log ("Player is the winner!  Let's play agian.");
                } else if (winner === 'Computer') {
                    computerWins += 1;
                    console.log ("Computer is the winner!  Let's play agian.");
                } else {
                    console.log ("It's a tie!  Let's play agian.");
                }
      console.log ("Player score: " + playerWins + ".  Computer score: " + computerWins + ".");
    }
    return [playerWins, computerWins];  //function will loop until one player reaches 5 wins.
}
playToFive();  //starts rps game.
