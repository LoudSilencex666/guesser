'use strict';

System.register(['../globalVars/gameMode.js', '../utills/randomixes.js', '../globalVars/canvas.js', '../globalVars/circle.js', '../globalVars/font.js', '../sprites/circle.js', '../globalVars/words.js'], function (_export, _context) {
    "use strict";

    var gameMode, founder, randomix, randomixRGB, randomixV2, canvas, circleVars, font, Circle, logo, startTime, gameTime, spritesrefresh;
    function menu() {
        gameTime += (Date.now() - startTime) / 1000;

        canvas.ctx.clearRect(0, 0, canvas.w, canvas.h);
        canvas.ctx.textAlign = 'center';
        canvas.ctx.textBaseline = 'middle';
        canvas.ctx.font = font.fontSize + 'px PT Sans';
        canvas.ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        canvas.ctx.fillText(logo, canvas.w / 2, canvas.h / 2);

        if (gameTime > spritesrefresh) {
            randomixV2(canvas.w / 2 - canvas.w / 16 * logo.length / 2, canvas.w / 2 + canvas.w / 16 * logo.length / 2, canvas.h / 2 - font.fontSize / 2, canvas.h / 2 + font.fontSize / 2);

            if (founder.found) {
                circleVars.sprites.circles.push({
                    circle: new Circle(canvas.ctx, circleVars.x, circleVars.y, circleVars.radius, circleVars.strokeWidth, randomixRGB(), randomixRGB(), 25)
                });

                founder.found = false;
            }

            randomixV2(canvas.w / 2 - canvas.w / 16 * logo.length / 2, canvas.w / 2 + canvas.w / 16 * logo.length / 2, canvas.h / 2 - font.fontSize / 2, canvas.h / 2 + font.fontSize / 2);

            if (founder.found) {
                circleVars.sprites.circles.push({
                    circle: new Circle(canvas.ctx, circleVars.x, circleVars.y, circleVars.radius, circleVars.strokeWidth, randomixRGB(), randomixRGB(), 25)
                });

                founder.found = false;
            }

            randomixV2(canvas.w / 2 - canvas.w / 16 * logo.length / 2, canvas.w / 2 + canvas.w / 16 * logo.length / 2, canvas.h / 2 - font.fontSize / 2, canvas.h / 2 + font.fontSize / 2);

            if (founder.found) {
                circleVars.sprites.circles.push({
                    circle: new Circle(canvas.ctx, circleVars.x, circleVars.y, circleVars.radius, circleVars.strokeWidth, randomixRGB(), randomixRGB(), 25)
                });

                founder.found = false;
            }
            randomixV2(canvas.w / 2 - canvas.w / 16 * logo.length / 2, canvas.w / 2 + canvas.w / 16 * logo.length / 2, canvas.h / 2 - font.fontSize / 2, canvas.h / 2 + font.fontSize / 2);

            if (founder.found) {
                circleVars.sprites.circles.push({
                    circle: new Circle(canvas.ctx, circleVars.x, circleVars.y, circleVars.radius, circleVars.strokeWidth, randomixRGB(), randomixRGB(), 25)
                });

                founder.found = false;
            }
            randomixV2(canvas.w / 2 - canvas.w / 16 * logo.length / 2, canvas.w / 2 + canvas.w / 16 * logo.length / 2, canvas.h / 2 - font.fontSize / 2, canvas.h / 2 + font.fontSize / 2);

            if (founder.found) {
                circleVars.sprites.circles.push({
                    circle: new Circle(canvas.ctx, circleVars.x, circleVars.y, circleVars.radius, circleVars.strokeWidth, randomixRGB(), randomixRGB(), 25)
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
    }

    _export('menu', menu);

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
            logo = _globalVarsWordsJs.logo;
        }],
        execute: function () {
            startTime = Date.now();
            gameTime = 0;
            spritesrefresh = 0;
        }
    };
});