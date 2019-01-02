import { gameMode } from "../globalVars/gameMode.js";
import { answer } from "../globalVars/words.js";
import { results } from '../globalVars/score.js';

const menu = document.querySelector('.menu-container');
const inGameMenu = document.querySelector('.ui-container');
const stage = document.querySelector('.stage');
const score = document.querySelector('.score');
const postGameStats = document.querySelector('.post-game-stats');


const easyDiff = document.querySelector('.easy');
easyDiff.addEventListener('click', () => {

    menu.style.display = 'none';
    inGameMenu.style.display = 'flex';
    stage.style.display = 'flex';
    score.style.display = 'flex';

    let option = 'gameWord';
    gameMode.changeState('gameSizing', option);
});

const mediumDiff = document.querySelector('.medium');
mediumDiff.addEventListener('click', () => {

    menu.style.display = 'none';
    inGameMenu.style.display = 'flex';
    stage.style.display = 'flex';
    score.style.display = 'flex';
    
    let option = 'gameDoubleWord';
    gameMode.changeState('gameSizing', option);
});

const hardDiff = document.querySelector('.hard');
hardDiff.addEventListener('click', () => {

    menu.style.display = 'none';
    inGameMenu.style.display = 'flex';
    stage.style.display = 'flex';
    score.style.display = 'flex';
    
    let option = 'gameSentence';
    gameMode.changeState('gameSizing', option);
});

const image = document.querySelector('.image');
const imageContainer = document.querySelector('.image-container');
image.addEventListener('click', () => {

    menu.style.display = 'none';
    imageContainer.style.display = 'block';
    
    let option = 'getImage';
    gameMode.changeState('gameSizing', option);
});

const credits = document.querySelector('.credits');
credits.addEventListener('click', () => {

    menu.style.display = 'none';
    
    let option = 'gameCreditsSetup';
    gameMode.changeState('gameSizing', option);
});

const backButton = document.querySelector('.fa-gear');
backButton.addEventListener('click', () => {
    menu.style.display = 'flex';
    inGameMenu.style.display = 'none';
    stage.style.display = 'none';
    score.style.display = 'none';
    
    let option = 'menuSizing';
    gameMode.changeState('clearingScene', option);
});

const input = document.querySelector('#answer');
const inputButton = document.querySelector('.button');
inputButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    answer[0] = input.value.toUpperCase();
    input.value = '';
    
    let option = gameMode.currentState;
    gameMode.changeState('checkingAnswer', option);
});

const continueButton = document.querySelector('.continue-button');
continueButton.addEventListener('click', (evt) => {
    menu.style.display = 'flex';
    postGameStats.style.display = 'none';
    results.postGameStats = true;

    let option = 'menuSizing';
    gameMode.changeState('clearingScene', option);
});