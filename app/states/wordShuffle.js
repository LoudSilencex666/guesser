import { gameMode } from '../globalVars/gameMode.js';
import { singleWord, doubleWord, sentence } from '../globalVars/words.js';
import { randomix } from '../utills/randomixes.js';
import { score } from '../globalVars/score.js';
import { updateStage } from '../utills/scoreCounter.js';

var request = new XMLHttpRequest();
request.open("GET", "./dist/db/myjsonfile.json", false);
request.send(null)
var my_JSON_object = JSON.parse(request.responseText);
var resultJSON = Object.keys(my_JSON_object);

export function wordShuffle() {
    console.log(gameMode.option)


    if(gameMode.option === 'gameWord') {
        singleWord[0] = resultJSON[randomix(resultJSON.length)].toUpperCase();
    } else if (gameMode.option === 'gameDoubleWord') {
        doubleWord[0][0] = resultJSON[randomix(resultJSON.length)].toUpperCase();
        doubleWord[0][1] = resultJSON[randomix(resultJSON.length)].toUpperCase();
    } else if (gameMode.option === 'gameSentence') {
        sentence[0][0] = resultJSON[randomix(resultJSON.length)].toUpperCase();
        sentence[0][1] = resultJSON[randomix(resultJSON.length)].toUpperCase();
        sentence[0][2] = resultJSON[randomix(resultJSON.length)].toUpperCase();
        sentence[0][3] = resultJSON[randomix(resultJSON.length)].toUpperCase();
    }

    score.currentStage++;
    updateStage();

    gameMode.changeState(gameMode.option);
}