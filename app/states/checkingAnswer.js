import { gameMode } from '../globalVars/gameMode.js';
import { singleWord, doubleWord, sentence, answer } from "../globalVars/words.js";
import { score, results } from "../globalVars/score.js";

export function checkingAnswer() {
    if (gameMode.option === 'gameWord') {
        if (answer[0] !== singleWord[0]) {
            results.easyResult -= score.easyLose;
            score.succesfullStage--;
        }
    } else if (gameMode.option === 'gameDoubleWord') {
        if (answer[0] !== `${doubleWord[0][0]} ${doubleWord[0][1]}`) {
            results.mediumResult -= score.mediumLose;
            score.succesfullStage--;
        }
    } else if (gameMode.option === 'gameSentence') {
        if (answer[0] !== `${sentence[0][0]} ${sentence[0][1]} ${sentence[0][2]} ${sentence[0][3]}`) {
            results.hardResult -= score.hardLose;
            score.succesfullStage--;
        }
    }



    gameMode.changeState('gameSizing', gameMode.option);
};
