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
    return (move || getInput())
}

function getComputerMove(move) {
    return (move || randomPlay())
}

function getWinner(playerMove,computerMove) {
    var winner;

    if (playerMove == computerMove) {
        winner = "tie";
    } else if ((playerMove == "rock"     && computerMove == "scissors") ||
               (playerMove == "scissors" && computerMove == "paper") ||
               (playerMove == "paper"    && computerMove == "rock")) {
        winner = "player";
    } else {
        winner = "computer";
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner;

    while (playerWins<5  && computerWins<5) {
        winner = getWinner(getPlayerMove(), getComputerMove());
        if(winner == "computer") { computerWins++; }
        if(winner == "player")   { playerWins++; }
    }

    return [playerWins, computerWins];
}

console.log(playToFive());



