'use strict';

let numbertoGuess = Math.trunc(Math.random() * 20) + 1;

console.log(numbertoGuess)
const messagePara = document.querySelector('.message');

const checkButton = document.querySelector('.check');

const guessedNumber = document.querySelector('.number');

const againButton = document.querySelector('.again')

const scoreELement = document.querySelector('.score');

const highscoreElement = document.querySelector('.highscore');

//get the score span element
let score = 20;

let highscore = 0;

//adding event Listener on click for guess

checkButton.addEventListener('click', checkGuess);

//adding event listener on click for reset game. 

againButton.addEventListener('click', resetGame);

//lost Game function. 

const lostGame = function () {
    messagePara.textContent = 'You Lost the Game';
    scoreELement.textContent = 0;
    document.body.style.backgroundColor = 'red';
}



//get the button for checking the number 

function checkGuess() {

    const inputNumber = Number(document.querySelector('.guess').value);
    console.log(inputNumber);


    if (!inputNumber) {
        messagePara.textContent = 'No Number Entered'
    } else if (inputNumber === numbertoGuess) {
        messagePara.textContent = 'Correct Number Guessed!'
        document.body.style.backgroundColor = 'green';
        guessedNumber.textContent = inputNumber;

        if (score > highscore) {
            highscore = score;
            highscoreElement.textContent = highscore;
        }
    } else if (inputNumber > numbertoGuess) {
        if (score > 1) {
            messagePara.textContent = 'Too High';
            score--;
            scoreELement.textContent = score;
        } else {
            lostGame();
        }

    } else if (inputNumber < numbertoGuess) {
        if (score > 1) {
            messagePara.textContent = 'Too Low';
            score--;
            scoreELement.textContent = score;
        } else {
            lostGame();
        }

    }
}


function resetGame() {
    score = 20
    numbertoGuess = Math.trunc(Math.random() * 20) + 1;
    scoreELement.textContent = score;
    messagePara.textContent = 'Start guessing...';
    document.body.style.backgroundColor = '#222';
    guessedNumber.textContent = '?';
    document.querySelector('.guess').value = ''
}



// getButton.addEventListener('click', checkGuess);



