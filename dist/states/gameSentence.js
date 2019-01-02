'use strict';

System.register(['../globalVars/gameMode.js', '../utills/randomixes.js', '../globalVars/canvas.js', '../globalVars/circle.js', '../globalVars/font.js', '../sprites/circle.js', '../globalVars/words.js', '../utills/scoreCounter.js'], function (_export, _context) {
    "use strict";

    var gameMode, founder, randomix, randomixRGB, randomixV2, canvas, circleVars, font, Circle, sentence, updateScore, scoreCounter, startTime, gameTime, spritesrefresh;
    function gameSentence() {
        gameTime += (Date.now() - startTime) / 1000;

        canvas.ctx.clearRect(0, 0, canvas.w, canvas.h);
        canvas.ctx.textAlign = 'center';
        canvas.ctx.textBaseline = 'middle';
        canvas.ctx.font = font.fontSize + 'px PT Sans';
        canvas.ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        canvas.ctx.fillText(sentence[0][0], canvas.w / 2, canvas.h / 16);
        canvas.ctx.fillText(sentence[0][1], canvas.w / 2, canvas.h / 16 * 5);
        canvas.ctx.fillText(sentence[0][2], canvas.w / 2, canvas.h / 16 * 9);
        canvas.ctx.fillText(sentence[0][3], canvas.w / 2, canvas.h / 16 * 13);

        if (gameTime > spritesrefresh) {
            randomixV2(canvas.w / 2 - canvas.w / 16 * sentence[0][0].length / 2, canvas.w / 2 + canvas.w / 16 * sentence[0][0].length / 2, canvas.h / 16 - font.fontSize / 2, canvas.h / 16 + font.fontSize / 2);

            if (founder.found) {
                circleVars.sprites.circles.push({
                    circle: new Circle(canvas.ctx, circleVars.x, circleVars.y, circleVars.radius, circleVars.strokeWidth, randomixRGB(), randomixRGB(), 29)
                });

                founder.found = false;
            }

            randomixV2(canvas.w / 2 - canvas.w / 16 * sentence[0][1].length / 2, canvas.w / 2 + canvas.w / 16 * sentence[0][1].length / 2, canvas.h / 16 * 5 - font.fontSize / 2, canvas.h / 16 * 5 + font.fontSize / 2);

            if (founder.found) {
                circleVars.sprites.circles.push({
                    circle: new Circle(canvas.ctx, circleVars.x, circleVars.y, circleVars.radius, circleVars.strokeWidth, randomixRGB(), randomixRGB(), 29)
                });

                founder.found = false;
            }

            randomixV2(canvas.w / 2 - canvas.w / 16 * sentence[0][2].length / 2, canvas.w / 2 + canvas.w / 16 * sentence[0][2].length / 2, canvas.h / 16 * 9 - font.fontSize / 2, canvas.h / 16 * 9 + font.fontSize / 2);

            if (founder.found) {
                circleVars.sprites.circles.push({
                    circle: new Circle(canvas.ctx, circleVars.x, circleVars.y, circleVars.radius, circleVars.strokeWidth, randomixRGB(), randomixRGB(), 29)
                });

                founder.found = false;
            }

            randomixV2(canvas.w / 2 - canvas.w / 16 * sentence[0][3].length / 2, canvas.w / 2 + canvas.w / 16 * sentence[0][3].length / 2, canvas.h / 16 * 13 - font.fontSize / 2, canvas.h / 16 * 13 + font.fontSize / 2);

            if (founder.found) {
                circleVars.sprites.circles.push({
                    circle: new Circle(canvas.ctx, circleVars.x, circleVars.y, circleVars.radius, circleVars.strokeWidth, randomixRGB(), randomixRGB(), 29)
                });

                founder.found = false;
            }
            gameTime = 0;
            startTime = Date.now();
        }

        for (var i = 0; i < circleVars.sprites.circles.length; i++) {
            circleVars.sprites.circles[i].circle.move();
        }

        circleVars.sprites.spritesCounter = circleVars.sprites.circles.length;

        scoreCounter();
        updateScore();
    }

    _export('gameSentence', gameSentence);

    return {
        setters: [function (_globalVarsGameModeJs) {
            gameMode = _globalVarsGameModeJs.gameMode;
        }, function (_utillsRandomixesJs) {
            founder = _utillsRandomixesJs.founder;
            randomix = _utillsRandomixesJs.randomix;
            randomixRGB = _utillsRandomixesJs.randomixRGB;
            randomixV2 = _utillsRandomixesJs.randomixV2;
        }, function (_globalVarsCanvasJs) {
            canvas = _globalVarsCanvasJs.canvas;
        }, function (_globalVarsCircleJs) {
            circleVars = _globalVarsCircleJs;
        }, function (_globalVarsFontJs) {
            font = _globalVarsFontJs;
        }, function (_spritesCircleJs) {
            Circle = _spritesCircleJs.Circle;
        }, function (_globalVarsWordsJs) {
            sentence = _globalVarsWordsJs.sentence;
        }, function (_utillsScoreCounterJs) {
            updateScore = _utillsScoreCounterJs.updateScore;
            scoreCounter = _utillsScoreCounterJs.scoreCounter;
        }],
        execute: function () {
            startTime = Date.now();
            gameTime = 0;
            spritesrefresh = 0;
        }
    };
});