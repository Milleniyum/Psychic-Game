var wins = 0, losses = 0, remaining = 9;

var winP = document.getElementById("wins");
var lossesP = document.getElementById("losses");
var remainingP = document.getElementById("remaining");
var guessesP = document.getElementById("guesses");
var compGuess;

function getCompGuess() {
    compGuess = Math.floor(Math.random() * 26) + 65; // generate a random number between 65 and 90 to represent the keycodes a-z
}

function newGame() {
    getCompGuess();
    winP.textContent = "Wins: " + wins;
    lossesP.textContent = "Losses: " + losses;
    remainingP.textContent = "Guesses left: 9";
    guessesP.textContent = "Your guesses so far:";
}

document.onkeyup = function(event) {
    if (event.keyCode > 64 && event.keyCode < 91) {
        if (event.keyCode === compGuess) {
            wins++;
            newGame();
        } else {
            remaining--;
            remainingP.textContent = "Guesses left: " + remaining;
            guessesP.textContent += " " + event.key.toLowerCase();
            if (remaining === 0) {
                losses++;
                remaining = 9;
                newGame();
            }
        }
    }
}

newGame();