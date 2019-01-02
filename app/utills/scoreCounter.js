import { score, results } from '../globalVars/score.js';
import { gameMode } from '../globalVars/gameMode.js';

export function scoreCounter() {
    if (gameMode.currentState === 'gameWord') {
        results.easyResult -= 3;
        score.score = results.easyResult;
    } else if (gameMode.currentState === 'gameDoubleWord') {
        results.mediumResult -= 7;
        score.score = results.mediumResult;
    } else if (gameMode.currentState === 'gameSentence') {
        results.hardResult -= 25;
        score.score = results.hardResult;
    }
}

export function updateStage() {
    const stage = document.querySelector('.stage-number');
    stage.innerHTML = `${score.currentStage} / ${score.maxStage}`; 
}

export function updateScore(){
    const scoreEle = document.querySelector('.score-number');
    scoreEle.innerHTML = score.score;
}