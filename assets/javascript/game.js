var wins = 0, losses = 0, remaining;

var winP = document.getElementById("wins");
var lossesP = document.getElementById("losses");
var remainingP = document.getElementById("remaining");
var guessesP = document.getElementById("guesses");
var guesses;
var compGuess;

function newGame() {
    remaining = 9;
    winP.textContent = "Wins: " + wins;
    lossesP.textContent = "Losses: " + losses;
    remainingP.textContent = "Guesses left: " + remaining;
    guessesP.textContent = "Your guesses so far:";
    guesses = [];
    compGuess = Math.floor(Math.random() * 26) + 65;
}

document.onkeyup = function (event) {
    if (event.keyCode > 64 && event.keyCode < 91 && guesses.indexOf(event.key) === -1) {
        if (event.keyCode === compGuess) {
            wins++;
            newGame();
        } else {
            remaining--;
            guesses.push(event.key);
            remainingP.textContent = "Guesses left: " + remaining;
            guessesP.textContent += " " + event.key.toLowerCase();
            if (remaining === 0) {
                losses++;
                newGame();
            }
        }
    }
}

newGame();