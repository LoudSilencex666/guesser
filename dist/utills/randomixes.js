'use strict';

System.register(['../globalVars/canvas.js', '../globalVars/circle.js', '../sprites/circle.js', '../globalVars/images.js'], function (_export, _context) {
    "use strict";

    var canvas, circleVars, Circle, image, wyjebanyArray, wyjebanyArray2, founder, randomix, randomixRGB, randomixV2, randomixImage, randomixCredits;
    return {
        setters: [function (_globalVarsCanvasJs) {
            canvas = _globalVarsCanvasJs.canvas;
        }, function (_globalVarsCircleJs) {
            circleVars = _globalVarsCircleJs;
        }, function (_spritesCircleJs) {
            Circle = _spritesCircleJs.Circle;
        }, function (_globalVarsImagesJs) {
            image = _globalVarsImagesJs.image;
            wyjebanyArray = _globalVarsImagesJs.wyjebanyArray;
            wyjebanyArray2 = _globalVarsImagesJs.wyjebanyArray2;
        }],
        execute: function () {
            _export('founder', founder = {
                found: false
            });

            _export('randomix', randomix = function randomix(z) {
                var result = Math.floor(Math.random() * z + 1);
                return result;
            });

            _export('randomixRGB', randomixRGB = function randomixRGB() {
                var result = 'rgb(' + randomix(255) + ', ' + randomix(255) + ', ' + randomix(255) + ')';
                return result;
            });

            _export('randomixV2', randomixV2 = function randomixV2(minX, maxX, minY, maxY) {

                var resultX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
                var resultY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
                var pixels = [canvas.ctx.getImageData(resultX + circleVars.strokeWidth / 2 + circleVars.radius + 1, resultY, 1, 1), canvas.ctx.getImageData(resultX - circleVars.strokeWidth / 2 - circleVars.radius - 1, resultY, 1, 1), canvas.ctx.getImageData(resultX, resultY + circleVars.strokeWidth / 2 + circleVars.radius + 1, 1, 1), canvas.ctx.getImageData(resultX, resultY - circleVars.strokeWidth / 2 - circleVars.radius - 1, 1, 1)];
                var data = [pixels[0].data, pixels[1].data, pixels[2].data, pixels[3].data];

                for (var i = 0; i < data.length; i++) {
                    circleVars.rgba[i] = 'rgba(' + data[i][0] + ', ' + data[i][1] + ', ' + data[i][2] + ', ' + data[i][3] / 255 + ')';
                }

                for (var _i = 0; _i < circleVars.rgba.length; _i++) {
                    if (circleVars.rgba[_i] === 'rgba(0, 0, 0, 1)') {
                        circleVars.x = resultX;
                        circleVars.y = resultY;
                        founder.found = true;
                    }
                }
            });

            _export('randomixImage', randomixImage = function randomixImage() {
                var resultX = void 0;
                var resultY = void 0;
                var resultRGBA1 = void 0;
                var resultRGBA2 = void 0;

                if (wyjebanyArray2.length >= 0) {

                    var index = Math.floor(Math.random() * (wyjebanyArray2.length - 1 + 1)) + 0;

                    resultX = wyjebanyArray2[index].x;
                    resultY = wyjebanyArray2[index].y;
                    resultRGBA1 = wyjebanyArray2[index].rgba1;
                    resultRGBA2 = wyjebanyArray2[index].rgba2;

                    wyjebanyArray2.splice(index, 1);

                    circleVars.x = resultX;
                    circleVars.y = resultY;
                    circleVars.rgba[0] = resultRGBA1;
                    circleVars.rgba[1] = resultRGBA2;
                    founder.found = true;
                }
            });

            _export('randomixCredits', randomixCredits = function randomixCredits() {
                var resultX = void 0;
                var resultY = void 0;
                var resultRGBA1 = void 0;
                var resultRGBA2 = void 0;

                if (wyjebanyArray2.length >= 1) {

                    var index = Math.floor(Math.random() * (wyjebanyArray2.length - 1 + 1)) + 0;

                    resultX = wyjebanyArray2[index].x;
                    resultY = wyjebanyArray2[index].y;
                    resultRGBA1 = wyjebanyArray2[index].rgba1;
                    resultRGBA2 = wyjebanyArray2[index].rgba2;

                    if (resultRGBA1 === 'rgba(0, 0, 0, 1)') {
                        circleVars.x = resultX;
                        circleVars.y = resultY;
                        circleVars.rgba[0] = randomixRGB();
                        circleVars.rgba[1] = randomixRGB();
                        founder.found = true;
                    }

                    if (wyjebanyArray2.length !== 0) {
                        wyjebanyArray2.splice(index, 1);
                    }
                }
            });

            _export('founder', founder);

            _export('randomix', randomix);

            _export('randomixRGB', randomixRGB);

            _export('randomixV2', randomixV2);

            _export('randomixImage', randomixImage);

            _export('randomixCredits', randomixCredits);
        }
    };
});