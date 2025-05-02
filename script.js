'use strict';
const currentScorePlayerOne = document.querySelector('#current-score-1');
const currentScorePlayerTwo = document.querySelector('#current-score-2');
const totalScorePlayerOne = document.querySelector('#score-1');
const totalScorePlayerTwo = document.querySelector('#score-2');
const dice = document.querySelectorAll('.dice');
//BTN
const btnNewGame = document.querySelector('#btn-new-game');
const btnRollDice = document.querySelector('#btn-roll-dice');
const btnHold = document.querySelector('#btn-hold');

let random;
let randomTwo;
let scorePlayerOne;
let scorePlayerTwo;
let scorePlayerOneTotal;
let scorePlayerTwoTotal;
let activPlayer = 'player 1';

btnRollDice.addEventListener('click', function () {
  random = Math.trunc(Math.random() * 6) + 1;
  dice.forEach(function (dicee) {
    dicee.src = `dice-${random}.png`;
    dicee.classList.remove('hidden');
  });
});
