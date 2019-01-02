'use strict';

System.register(['../globalVars/canvas.js', '../globalVars/gameMode.js', '../globalVars/font.js', '../globalVars/circle.js', '../globalVars/score.js', '../utills/scoreCounter.js'], function (_export, _context) {
    "use strict";

    var canvas, gameMode, font, sprites, score, updateStage;
    function gameSizing() {
        //clearing 
        canvas.ctx.clearRect(0, 0, canvas.w, canvas.h);
        sprites.circles = [];
        sprites.spritesCounter = 0;

        //prepare game screen 
        canvas.eleDOM = window.document.querySelector('#guesser');

        canvas.eleDOM.width = document.body.clientWidth;
        canvas.eleDOM.height = document.body.clientHeight;

        if (gameMode.option === 'gameWord') {
            font.fontSize = canvas.w * canvas.h / font.simpleWordRatio;
        } else if (gameMode.option === 'gameDoubleWord') {
            font.fontSize = canvas.w * canvas.h / font.simpleWordRatio;
        } else if (gameMode.option === 'gameSentence') {
            font.fontSize = canvas.w * canvas.h / font.sentenceRatio;
        }

        //checking if game is ending
        if (score.currentStage === score.maxStage) {
            gameMode.changeState('postGameStats');
        } else if (gameMode.option === 'getImage') {
            gameMode.changeState('getImage', 'gameImage');
        } else if (gameMode.option === 'gameCreditsSetup') {
            gameMode.changeState('gameCreditsSetup', 'gameCredits');
        } else {
            gameMode.changeState('wordShuffle', gameMode.option);
        }
    }
    _export('gameSizing', gameSizing);

    return {
        setters: [function (_globalVarsCanvasJs) {
            canvas = _globalVarsCanvasJs.canvas;
        }, function (_globalVarsGameModeJs) {
            gameMode = _globalVarsGameModeJs.gameMode;
        }, function (_globalVarsFontJs) {
            font = _globalVarsFontJs;
        }, function (_globalVarsCircleJs) {
            sprites = _globalVarsCircleJs.sprites;
        }, function (_globalVarsScoreJs) {
            score = _globalVarsScoreJs.score;
        }, function (_utillsScoreCounterJs) {
            updateStage = _utillsScoreCounterJs.updateStage;
        }],
        execute: function () {
            ;
        }
    };
});