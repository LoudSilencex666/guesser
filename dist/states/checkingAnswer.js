"use strict";

System.register(["../globalVars/gameMode.js", "../globalVars/words.js", "../globalVars/score.js"], function (_export, _context) {
    "use strict";

    var gameMode, singleWord, doubleWord, sentence, answer, score, results;
    function checkingAnswer() {
        if (gameMode.option === 'gameWord') {
            if (answer[0] !== singleWord[0]) {
                results.easyResult -= score.easyLose;
                score.succesfullStage--;
            }
        } else if (gameMode.option === 'gameDoubleWord') {
            if (answer[0] !== doubleWord[0][0] + " " + doubleWord[0][1]) {
                results.mediumResult -= score.mediumLose;
                score.succesfullStage--;
            }
        } else if (gameMode.option === 'gameSentence') {
            if (answer[0] !== sentence[0][0] + " " + sentence[0][1] + " " + sentence[0][2] + " " + sentence[0][3]) {
                results.hardResult -= score.hardLose;
                score.succesfullStage--;
            }
        }

        gameMode.changeState('gameSizing', gameMode.option);
    }
    _export("checkingAnswer", checkingAnswer);

    return {
        setters: [function (_globalVarsGameModeJs) {
            gameMode = _globalVarsGameModeJs.gameMode;
        }, function (_globalVarsWordsJs) {
            singleWord = _globalVarsWordsJs.singleWord;
            doubleWord = _globalVarsWordsJs.doubleWord;
            sentence = _globalVarsWordsJs.sentence;
            answer = _globalVarsWordsJs.answer;
        }, function (_globalVarsScoreJs) {
            score = _globalVarsScoreJs.score;
            results = _globalVarsScoreJs.results;
        }],
        execute: function () {
            ;
        }
    };
});