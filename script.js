'use strict';
const currentScorePlayerOne = document.querySelector('#current-score-1');
const currentScorePlayerTwo = document.querySelector('#current-score-2');
const totalScorePlayerOne = document.querySelector('#score-1');
const totalScorePlayerTwo = document.querySelector('#score-2');
const dice = document.querySelector('#dice');
//BTN
const btnNewGame = document.querySelector('#btn-new-game');
const btnRollDice = document.querySelector('#btn-roll-dice');
const btnHold = document.querySelector('#btn-hold');

let random = Math.trunc(Math.random() * 6) + 1;
let scorePlayerOne;
let scorePlayerTwo;
