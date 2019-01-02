'use strict';

System.register(['../globalVars/gameMode.js', '../globalVars/words.js', '../utills/randomixes.js', '../globalVars/score.js', '../utills/scoreCounter.js'], function (_export, _context) {
    "use strict";

    var gameMode, singleWord, doubleWord, sentence, randomix, score, updateStage, request, my_JSON_object, resultJSON;
    function wordShuffle() {
        console.log(gameMode.option);

        if (gameMode.option === 'gameWord') {
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

    _export('wordShuffle', wordShuffle);

    return {
        setters: [function (_globalVarsGameModeJs) {
            gameMode = _globalVarsGameModeJs.gameMode;
        }, function (_globalVarsWordsJs) {
            singleWord = _globalVarsWordsJs.singleWord;
            doubleWord = _globalVarsWordsJs.doubleWord;
            sentence = _globalVarsWordsJs.sentence;
        }, function (_utillsRandomixesJs) {
            randomix = _utillsRandomixesJs.randomix;
        }, function (_globalVarsScoreJs) {
            score = _globalVarsScoreJs.score;
        }, function (_utillsScoreCounterJs) {
            updateStage = _utillsScoreCounterJs.updateStage;
        }],
        execute: function () {
            request = new XMLHttpRequest();

            request.open("GET", "./dist/db/myjsonfile.json", false);
            request.send(null);
            my_JSON_object = JSON.parse(request.responseText);
            resultJSON = Object.keys(my_JSON_object);
        }
    };
});