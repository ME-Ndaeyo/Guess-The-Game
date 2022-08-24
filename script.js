'use strict';
const message = document.querySelector('.message');
const check = document.querySelector('.check');
const restart = document.querySelector('.again');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore')
const body = document.querySelector('body');
const number = Math.trunc(Math.random()*20)+1;
const secretNumber = document.querySelector('.number');
let scoreVal = 20;
let gamePlaying = true;

// Functions
const displayMessage = function(content){
  message.textContent = content;
}

const displaySecretNumber = function (content) {
  secretNumber.textContent = content;
};

const displayScore = function (content) {
  score.textContent = content;
};

const restartGame = function () {
  displaySecretNumber('?');
  number;
  scoreVal = 20;
  displayScore(scoreVal);
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  body.style.backgroundColor = '#222';
  gamePlaying = true;
};

const checkGuess = function () {
  const inputVal = Number(document.querySelector('.guess').value);
  // console.log(inputVal, typeof inputVal);

  // If guess value is empty
  if (!inputVal) {
    displayMessage('⚠ No number was inputed!');

    //   If guess is correct
  } else if (inputVal === number) {
    displayMessage('🥳 Correct!');
    body.style.backgroundColor = '#60b347';
    displaySecretNumber(number);

    if (scoreVal > highScore.textContent) {
      highScore.textContent = scoreVal;
    }

    //   If guess is wrong
  } else if (inputVal !== number) {
    if (scoreVal > 1) {
      displayMessage(inputVal > number ? '📈 Too High!' : '📉 Too Low!');
      scoreVal--;
      displayScore(scoreVal);
    } else {
      displayMessage('😝 You lost the game!');
      displayScore(0);
      displaySecretNumber(number);
      body.style.backgroundColor = '#c20b0b';
    }
  }
};

// Restart game
restart.addEventListener('click', restartGame)

// Check guess
check.addEventListener('click', checkGuess)