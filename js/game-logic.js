// All code should be written in this file.
let playerOneMoveOneType = undefined;
let playerOneMoveTwoType = undefined;
let playerOneMoveThreeType = undefined;

let playerTwoMoveOneType = undefined;
let playerTwoMoveTwoType = undefined;
let playerTwoMoveThreeType = undefined;

let playerOneMoveOneValue = undefined;
let playerOneMoveTwoValue = undefined;
let playerOneMoveThreeValue = undefined;

let playerTwoMoveOneValue = undefined;
let playerTwoMoveTwoValue = undefined;
let playerTwoMoveThreeValue = undefined;

const moveTypes = ['rock', 'paper', 'scissors'];

function validMoves(moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    let valid = false;

    if (moveTypes.includes(moveOneType) && moveTypes.includes(moveTwoType) && moveTypes.includes(moveThreeType)) {
        if (Number.isInteger(moveOneValue) && Number.isInteger(moveThreeValue) && Number.isInteger(moveThreeValue)) {
            if (moveOneValue >= 1 && moveOneValue <= 99 && moveTwoValue >= 1 && moveTwoValue <= 99 && moveThreeValue >= 1 && moveThreeValue <= 99) {
                if (moveOneValue + moveTwoValue + moveThreeValue <= 99) {
                    valid = true;
                }
            }
        }
    }

    return valid;
}

function validAllMoves() {
    let valid = false;

    if (playerOneMoveOneType && playerOneMoveOneValue && playerOneMoveTwoType && playerOneMoveTwoValue && playerOneMoveThreeType && playerOneMoveThreeValue && playerTwoMoveOneType && playerTwoMoveOneValue && playerTwoMoveTwoType && playerTwoMoveTwoValue && playerTwoMoveThreeType && playerTwoMoveThreeValue) {
        valid = true;
    }

    return valid;
}

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    if (validMoves(moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue)) {
        if (player === 'Player One') {
            playerOneMoveOneType = moveOneType;
            playerOneMoveTwoType = moveTwoType;
            playerOneMoveThreeType = moveThreeType;

            playerOneMoveOneValue = moveOneValue;
            playerOneMoveTwoValue = moveTwoValue;
            playerOneMoveThreeValue = moveThreeValue;
        }

        if (player === 'Player Two') {
            playerTwoMoveOneType = moveOneType;
            playerTwoMoveTwoType = moveTwoType;
            playerTwoMoveThreeType = moveThreeType;

            playerTwoMoveOneValue = moveOneValue;
            playerTwoMoveTwoValue = moveTwoValue;
            playerTwoMoveThreeValue = moveThreeValue;
        }
    }
}

function getRoundWinner(round) {
    let winner = null;

    if (Number.isInteger(round) && round >= 1 && round <= 3) {
        if (round === 1 && playerOneMoveOneType && playerOneMoveOneValue && playerTwoMoveOneType && playerTwoMoveOneValue) {
            winner = getWinner(playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue);
        }

        if (round === 2 && playerOneMoveTwoType && playerOneMoveTwoValue && playerTwoMoveTwoType && playerTwoMoveTwoValue) {
            winner = getWinner(playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue);
        }

        if (round === 3 && playerOneMoveThreeType && playerOneMoveThreeValue && playerTwoMoveThreeType && playerTwoMoveThreeValue) {
            winner = getWinner(playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue);
        }
    }

    return winner;
}

function getWinner(playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue) {
    let winner = null

    if (playerOneMoveType === playerTwoMoveType) {
        if (playerOneMoveValue > playerTwoMoveValue) {
            winner = 'Player One';
        }

        if (playerOneMoveValue < playerTwoMoveValue) {
            winner = 'Player Two';
        }

        if (playerOneMoveValue === playerTwoMoveValue) {
            winner = 'Tie';
        }
    } else {
        if (playerOneMoveType === 'rock') {
            winner = playerTwoMoveType === 'paper' ? 'Player Two' : 'Player One';
        }

        if (playerOneMoveType === 'paper') {
            winner = playerTwoMoveType === 'scissors' ? 'Player Two' : 'Player One';
        }

        if (playerOneMoveType === 'scissors') {
            winner = playerTwoMoveType === 'rock' ? 'Player Two' : 'Player One';
        }
    }

    return winner;
}

function getGameWinner() {
    let gameWinner = null;
    let playerOneWins = 0;
    let playerTwoWins = 0;

    if (validAllMoves()) {
        for (round = 1; round <= 3; round++) {
            let roundWinner = getRoundWinner(round);

            if (roundWinner === 'Player One') {
                playerOneWins++;
            }

            if (roundWinner === 'Player Two') {
                playerTwoWins++;
            }
        }

        if (playerOneWins > playerTwoWins) {
            gameWinner = 'Player One';
        }

        if (playerOneWins < playerTwoWins) {
            gameWinner = 'Player Two';
        }

        if (playerOneWins === playerTwoWins) {
            gameWinner = 'Tie';
        }
    }

    return gameWinner;
}

function setComputerMoves() {
    let moveOneType = moveTypes[Math.floor(Math.random() * 3)];
    let moveTwoType = moveTypes[Math.floor(Math.random() * 3)];
    let moveThreeType = moveTypes[Math.floor(Math.random() * 3)];

    let moveOneValue = Math.floor(Math.random() * (99 - 2)) + 1;
    let moveTwoValue = Math.floor(Math.random() * (99 - moveOneValue - 1)) + 1;
    let moveThreeValue = 99 - moveOneValue - moveTwoValue;

    setPlayerMoves('Player Two', moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue);

    console.log(playerTwoMoveOneType);
    console.log(playerTwoMoveTwoType);
    console.log(playerTwoMoveThreeType);

    console.log(playerTwoMoveOneValue);
    console.log(playerTwoMoveTwoValue);
    console.log(playerTwoMoveThreeValue);
}