'use strict';

System.register(['../globalVars/gameMode.js', '../utills/randomixes.js', '../globalVars/canvas.js', '../globalVars/circle.js', '../sprites/circle.js', '../globalVars/images.js'], function (_export, _context) {
    "use strict";

    var gameMode, founder, randomixImage, canvas, circleVars, Circle, image, wyjebanyArray;
    function gameImage() {

        for (var i = 0; i < 100; i++) {
            randomixImage(0, canvas.w, 0, canvas.h);

            if (founder.found) {
                circleVars.sprites.circles.push({
                    circle: new Circle(canvas.ctx, circleVars.x, circleVars.y, circleVars.imageRadius, circleVars.imageStrokeWidth, circleVars.rgba[0], circleVars.rgba[1], 25)
                });
                founder.found = false;
            }
            circleVars.sprites.circles[circleVars.sprites.circles.length - 1].circle.draw();
        }

        circleVars.sprites.spritesCounter = circleVars.sprites.circles.length;
        console.log(circleVars.sprites.spritesCounter);
    }

    _export('gameImage', gameImage);

    return {
        setters: [function (_globalVarsGameModeJs) {
            gameMode = _globalVarsGameModeJs.gameMode;
        }, function (_utillsRandomixesJs) {
            founder = _utillsRandomixesJs.founder;
            randomixImage = _utillsRandomixesJs.randomixImage;
        }, function (_globalVarsCanvasJs) {
            canvas = _globalVarsCanvasJs.canvas;
        }, function (_globalVarsCircleJs) {
            circleVars = _globalVarsCircleJs;
        }, function (_spritesCircleJs) {
            Circle = _spritesCircleJs.Circle;
        }, function (_globalVarsImagesJs) {
            image = _globalVarsImagesJs.image;
            wyjebanyArray = _globalVarsImagesJs.wyjebanyArray;
        }],
        execute: function () {}
    };
});