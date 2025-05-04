'use strict';
const currentScorePlayerOne = document.querySelector('#current-score-1');
const currentScorePlayerTwo = document.querySelector('#current-score-2');
const totalScorePlayerOne = document.querySelector('#score-1');
const totalScorePlayerTwo = document.querySelector('#score-2');
const dice = document.querySelectorAll('.dice');
const playerBoxOne = document.querySelector('.player-box-1');
const playerBoxTwo = document.querySelector('.player-box-2');
//BTN
const btnNewGame = document.querySelector('#btn-new-game');
const btnRollDice = document.querySelector('#btn-roll-dice');
const btnHold = document.querySelector('#btn-hold');

let random;
let randomValue;
let scorePlayerOne = 0;
let scorePlayerTwo = 0;
let scorePlayerOneTotal = 0;
let scorePlayerTwoTotal = 0;
let activPlayer = 'player 1';

btnRollDice.addEventListener('click', function () {
  random = Math.trunc(Math.random() * 6) + 1;
  activPlayerSelection();
  scoreing();
  coloring();
  whoWin();
  dice.forEach(function (dices) {
    dices.src = `dice-${random}.png`;
    dices.classList.remove('hidden');
  });
});
function activPlayerSelection() {
  randomValue = random;
  if (random === 1) {
    randomValue = 0;
    if (activPlayer === 'player 2') {
      activPlayer = 'player 1';
      scorePlayerTwo = 0;
      currentScorePlayerTwo.textContent = scorePlayerTwo;
    } else if (activPlayer === 'player 1') {
      activPlayer = 'player 2';
      scorePlayerOne = 0;
      currentScorePlayerOne.textContent = scorePlayerOne;
    }
  }
}
function scoreing() {
  if (activPlayer === 'player 2') {
    scorePlayerTwo += randomValue;
    currentScorePlayerTwo.textContent = scorePlayerTwo;
  } else if (activPlayer === 'player 1') {
    scorePlayerOne += randomValue;
    currentScorePlayerOne.textContent = scorePlayerOne;
  }
}
function coloring() {
  if (activPlayer === 'player 2') {
    playerBoxOne.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    playerBoxTwo.style.backgroundColor = 'rgba(255, 255, 255, 0.538)';
  } else if (activPlayer === 'player 1') {
    playerBoxTwo.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    playerBoxOne.style.backgroundColor = 'rgba(255, 255, 255, 0.538)';
  }
}
//btn Hold
btnHold.addEventListener('click', function () {
  totalScoring();
  activPlayerSelection();
  scoreing();
  coloring();
  whoWin();
});
function totalScoring() {
  if (activPlayer === 'player 1') {
    scorePlayerOneTotal = scorePlayerOne + scorePlayerOneTotal;
    totalScorePlayerOne.textContent = scorePlayerOneTotal;
    random = 1;
  } else if (activPlayer === 'player 2') {
    scorePlayerTwoTotal = scorePlayerTwo + scorePlayerTwoTotal;
    totalScorePlayerTwo.textContent = scorePlayerTwoTotal;
    random = 1;
  }
}
function whoWin() {
  if (scorePlayerOneTotal >= 100) {
    playerBoxOne.style.backgroundColor = '#302f2f';
    btnHold.disabled = true;
    btnRollDice.disabled = true;
  } else if (scorePlayerTwoTotal >= 100) {
    playerBoxTwo.style.backgroundColor = '#302f2f';
    btnHold.disabled = true;
    btnRollDice.disabled = true;
  }
}
//BTN NEW GAME
