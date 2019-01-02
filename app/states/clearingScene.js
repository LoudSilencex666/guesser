import { canvas } from '../globalVars/canvas.js';
import { gameMode } from '../globalVars/gameMode.js';
import { sprites } from '../globalVars/circle.js';
import { score, results } from '../globalVars/score.js';
import { updateScore, updateStage } from '../utills/scoreCounter.js';

export function clearingScene() {
    canvas.ctx.clearRect(0,0, canvas.w, canvas.h); 
    sprites.circles = [];
    sprites.spritesCounter = 0;
    canvas.ctx.clearRect(0,0, canvas.w, canvas.h); 

    results.easyResult = score.easyScoreStart;
    results.mediumResult = score.mediumScoreStart;
    results.hardResult = score.hardScoreStart;
    score.currentStage = 0;
    score.succesfullStage = 12;

    updateScore();
    updateStage();

    gameMode.changeState(gameMode.option);
};
