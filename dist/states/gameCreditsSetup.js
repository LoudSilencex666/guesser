'use strict';

System.register(['../globalVars/gameMode.js', '../globalVars/images.js', '../globalVars/canvas.js', '../globalVars/font.js', '../globalVars/words.js', '../globalVars/circle.js', '../sprites/dinosaur.js'], function (_export, _context) {
    "use strict";

    var gameMode, wyjebanyArray, wyjebanyArray2, imageRGBA, canvas, font, credits, circleVars, Dinosaur;
    function gameCreditsSetup() {

        canvas.ctx.textAlign = 'center';
        canvas.ctx.textBaseline = 'middle';
        canvas.ctx.font = font.fontSize + 'px PT Sans';
        canvas.ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        canvas.ctx.fillText(credits[0][0], canvas.w / 4, canvas.h / 8);
        canvas.ctx.fillText(credits[0][1], canvas.w / 4, canvas.h / 8 * 3);
        canvas.ctx.fillText(credits[0][2], canvas.w / 4 * 3, canvas.h / 8);
        canvas.ctx.fillText(credits[0][3], canvas.w / 4 * 3, canvas.h / 8 * 3);

        var pixel = canvas.ctx.getImageData(0, 0, canvas.w, canvas.h / 2);
        imageRGBA.push(pixel.data);

        for (var i = 0; i < canvas.h / 2; i++) {
            for (var j = 0; j < canvas.w; j++) {
                wyjebanyArray.push({
                    x: j,
                    y: i
                });
            }
        }

        var index = 0;
        for (var _i = 0; _i < wyjebanyArray.length; _i++) {
            wyjebanyArray[_i].rgba1 = 'rgba(' + imageRGBA[0][index] + ', ' + imageRGBA[0][index + 1] + ', ' + imageRGBA[0][index + 2] + ', ' + imageRGBA[0][index + 3] / 255 + ')';
            wyjebanyArray[_i].rgba2 = 'rgba(' + imageRGBA[0][index] + ', ' + imageRGBA[0][index + 1] + ', ' + imageRGBA[0][index + 2] + ', ' + imageRGBA[0][index + 3] / 255 + ')';

            index += 4;
        }

        for (var _i2 = 0; _i2 < wyjebanyArray.length; _i2 += 4) {
            wyjebanyArray2.push(wyjebanyArray[_i2]);
        }

        var dinosaur = new Image();
        var nigga = new Image();
        dinosaur.src = "dist/images/dino.png";
        nigga.src = "dist/images/nigg.png";

        circleVars.sprites.credits[0] = {
            width: 867,
            height: 650,
            frames: 21,
            image: dinosaur
        };

        circleVars.sprites.credits[1] = {
            width: 600,
            height: 504,
            frames: 21,
            image: nigga
        };

        gameMode.changeState(gameMode.option);
    }
    _export('gameCreditsSetup', gameCreditsSetup);

    return {
        setters: [function (_globalVarsGameModeJs) {
            gameMode = _globalVarsGameModeJs.gameMode;
        }, function (_globalVarsImagesJs) {
            wyjebanyArray = _globalVarsImagesJs.wyjebanyArray;
            wyjebanyArray2 = _globalVarsImagesJs.wyjebanyArray2;
            imageRGBA = _globalVarsImagesJs.imageRGBA;
        }, function (_globalVarsCanvasJs) {
            canvas = _globalVarsCanvasJs.canvas;
        }, function (_globalVarsFontJs) {
            font = _globalVarsFontJs;
        }, function (_globalVarsWordsJs) {
            credits = _globalVarsWordsJs.credits;
        }, function (_globalVarsCircleJs) {
            circleVars = _globalVarsCircleJs;
        }, function (_spritesDinosaurJs) {
            Dinosaur = _spritesDinosaurJs.Dinosaur;
        }],
        execute: function () {
            ;
        }
    };
});