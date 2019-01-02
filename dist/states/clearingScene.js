'use strict';

System.register(['../globalVars/canvas.js', '../globalVars/gameMode.js', '../globalVars/circle.js', '../globalVars/score.js', '../utills/scoreCounter.js'], function (_export, _context) {
    "use strict";

    var canvas, gameMode, sprites, score, results, updateScore, updateStage;
    function clearingScene() {
        canvas.ctx.clearRect(0, 0, canvas.w, canvas.h);
        sprites.circles = [];
        sprites.spritesCounter = 0;
        canvas.ctx.clearRect(0, 0, canvas.w, canvas.h);

        results.easyResult = score.easyScoreStart;
        results.mediumResult = score.mediumScoreStart;
        results.hardResult = score.hardScoreStart;
        score.currentStage = 0;
        score.succesfullStage = 12;

        updateScore();
        updateStage();

        gameMode.changeState(gameMode.option);
    }
    _export('clearingScene', clearingScene);

    return {
        setters: [function (_globalVarsCanvasJs) {
            canvas = _globalVarsCanvasJs.canvas;
        }, function (_globalVarsGameModeJs) {
            gameMode = _globalVarsGameModeJs.gameMode;
        }, function (_globalVarsCircleJs) {
            sprites = _globalVarsCircleJs.sprites;
        }, function (_globalVarsScoreJs) {
            score = _globalVarsScoreJs.score;
            results = _globalVarsScoreJs.results;
        }, function (_utillsScoreCounterJs) {
            updateScore = _utillsScoreCounterJs.updateScore;
            updateStage = _utillsScoreCounterJs.updateStage;
        }],
        execute: function () {
            ;
        }
    };
});