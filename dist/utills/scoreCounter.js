'use strict';

System.register(['../globalVars/score.js', '../globalVars/gameMode.js'], function (_export, _context) {
    "use strict";

    var score, results, gameMode;
    function scoreCounter() {
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

    _export('scoreCounter', scoreCounter);

    function updateStage() {
        var stage = document.querySelector('.stage-number');
        stage.innerHTML = score.currentStage + ' / ' + score.maxStage;
    }

    _export('updateStage', updateStage);

    function updateScore() {
        var scoreEle = document.querySelector('.score-number');
        scoreEle.innerHTML = score.score;
    }

    _export('updateScore', updateScore);

    return {
        setters: [function (_globalVarsScoreJs) {
            score = _globalVarsScoreJs.score;
            results = _globalVarsScoreJs.results;
        }, function (_globalVarsGameModeJs) {
            gameMode = _globalVarsGameModeJs.gameMode;
        }],
        execute: function () {}
    };
});