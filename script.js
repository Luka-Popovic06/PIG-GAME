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
