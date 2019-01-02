import { canvas } from '../globalVars/canvas.js';
import { gameMode } from '../globalVars/gameMode.js';
import * as font from '../globalVars/font.js';
import { sprites } from '../globalVars/circle.js';
import { score } from '../globalVars/score.js';
import { updateStage } from '../utills/scoreCounter.js';

export function gameSizing() {
    //clearing 
    canvas.ctx.clearRect(0,0, canvas.w, canvas.h); 
    sprites.circles = [];
    sprites.spritesCounter = 0;

    //prepare game screen 
    canvas.eleDOM = window.document.querySelector('#guesser');

    canvas.eleDOM.width = document.body.clientWidth;
    canvas.eleDOM.height = document.body.clientHeight;

    if(gameMode.option === 'gameWord') {
        font.fontSize = canvas.w * canvas.h / font.simpleWordRatio;
    } else if (gameMode.option === 'gameDoubleWord') {
        font.fontSize = canvas.w * canvas.h / font.simpleWordRatio;
    } else if (gameMode.option === 'gameSentence') {
        font.fontSize = canvas.w * canvas.h / font.sentenceRatio;
    }

    //checking if game is ending
    if(score.currentStage === score.maxStage) {
        gameMode.changeState('postGameStats')
    } else if (gameMode.option === 'getImage') {
        gameMode.changeState('getImage', 'gameImage');
    } else if (gameMode.option === 'gameCreditsSetup') {
        gameMode.changeState('gameCreditsSetup', 'gameCredits');
    } else {
        gameMode.changeState('wordShuffle', gameMode.option);
    }

};
