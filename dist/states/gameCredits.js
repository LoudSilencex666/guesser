'use strict';

System.register(['../globalVars/gameMode.js', '../utills/randomixes.js', '../globalVars/canvas.js', '../globalVars/font.js', '../globalVars/words.js', '../globalVars/circle.js', '../sprites/circle.js', '../sprites/dinosaur.js'], function (_export, _context) {
    "use strict";

    var gameMode, founder, randomixCredits, canvas, font, credits, circleVars, Circle, Dinosaur, spriteX, spriteY, tick;
    function gameCredits() {

        for (var i = 0; i < 100; i++) {
            randomixCredits();

            if (founder.found) {
                circleVars.sprites.circles.push({
                    circle: new Circle(canvas.ctx, circleVars.x, circleVars.y, circleVars.radius, circleVars.strokeWidth, circleVars.rgba[0], circleVars.rgba[1], 25)
                });
                founder.found = false;

                circleVars.sprites.circles[circleVars.sprites.circles.length - 1].circle.draw();
            }
        }

        canvas.ctx.clearRect(0, canvas.h / 2, canvas.w, canvas.h);
        canvas.ctx.drawImage(circleVars.sprites.credits[0].image, spriteX * 867, spriteY * 650, 867, 650, canvas.w - 650 - 200, canvas.h - 450, 650, 450);

        canvas.ctx.drawImage(circleVars.sprites.credits[1].image, spriteX * 600, spriteY * 504, 600, 504, 200, canvas.h - 504, 600, 504);
        if (tick === 6) {
            if (spriteX < 20) {
                spriteX++;
            } else {
                spriteX = 0;
            }
            tick = 0;
        }

        tick++;

        circleVars.sprites.spritesCounter = circleVars.sprites.circles.length;
        console.log(circleVars.sprites.spritesCounter);
    }

    _export('gameCredits', gameCredits);

    return {
        setters: [function (_globalVarsGameModeJs) {
            gameMode = _globalVarsGameModeJs.gameMode;
        }, function (_utillsRandomixesJs) {
            founder = _utillsRandomixesJs.founder;
            randomixCredits = _utillsRandomixesJs.randomixCredits;
        }, function (_globalVarsCanvasJs) {
            canvas = _globalVarsCanvasJs.canvas;
        }, function (_globalVarsFontJs) {
            font = _globalVarsFontJs;
        }, function (_globalVarsWordsJs) {
            credits = _globalVarsWordsJs.credits;
        }, function (_globalVarsCircleJs) {
            circleVars = _globalVarsCircleJs;
        }, function (_spritesCircleJs) {
            Circle = _spritesCircleJs.Circle;
        }, function (_spritesDinosaurJs) {
            Dinosaur = _spritesDinosaurJs.Dinosaur;
        }],
        execute: function () {
            spriteX = 0;
            spriteY = 0;
            tick = 0;
        }
    };
});