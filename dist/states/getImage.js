'use strict';

System.register(['../globalVars/gameMode.js', '../globalVars/images.js', '../globalVars/canvas.js'], function (_export, _context) {
    "use strict";

    var gameMode, image, wyjebanyArray, wyjebanyArray2, imageRGBA, canvas, input, imageContainer, found;
    function getImage() {
        var imageWidth = canvas.w;
        var imageHeight = canvas.h;

        if (found) {
            canvas.ctx.drawImage(image, 0, 0, imageWidth, imageHeight);

            var pixel = canvas.ctx.getImageData(0, 0, imageWidth, imageHeight);
            imageRGBA.push(pixel.data);

            for (var i = 0; i < imageHeight; i++) {
                for (var j = 0; j < imageWidth; j++) {
                    wyjebanyArray.push({
                        x: j,
                        y: i
                    });
                }
            }

            var index = 0;

            for (var _i = 0; _i < wyjebanyArray.length; _i++) {
                wyjebanyArray[_i].rgba1 = 'rgba(' + (imageRGBA[0][index] - 40) + ', ' + (imageRGBA[0][index + 1] - 40) + ', ' + (imageRGBA[0][index + 2] - 40) + ', ' + imageRGBA[0][index + 3] / 255 + ')';
                wyjebanyArray[_i].rgba2 = 'rgba(' + (imageRGBA[0][index] + 40) + ', ' + (imageRGBA[0][index + 1] + 40) + ', ' + (imageRGBA[0][index + 2] + 40) + ', ' + imageRGBA[0][index + 3] / 255 + ')';

                index += 4;
            }

            for (var _i2 = 0; _i2 < wyjebanyArray.length; _i2 += 10) {
                wyjebanyArray2.push(wyjebanyArray[_i2]);
            }

            console.log(wyjebanyArray, wyjebanyArray2);
            canvas.ctx.clearRect(0, 0, canvas.w, canvas.h);
            imageContainer.style.display = 'none';
            gameMode.changeState(gameMode.option);
        }
    }
    _export('getImage', getImage);

    return {
        setters: [function (_globalVarsGameModeJs) {
            gameMode = _globalVarsGameModeJs.gameMode;
        }, function (_globalVarsImagesJs) {
            image = _globalVarsImagesJs.image;
            wyjebanyArray = _globalVarsImagesJs.wyjebanyArray;
            wyjebanyArray2 = _globalVarsImagesJs.wyjebanyArray2;
            imageRGBA = _globalVarsImagesJs.imageRGBA;
        }, function (_globalVarsCanvasJs) {
            canvas = _globalVarsCanvasJs.canvas;
        }],
        execute: function () {
            input = document.querySelector('.loadImage');
            imageContainer = document.querySelector('.image-container');
            found = false;


            input.addEventListener('change', function (evt) {
                var file = evt.target.files[0];

                if (file.type.match('image.*')) {
                    var reader = new FileReader();

                    reader.readAsDataURL(file);
                    reader.onload = function (evt) {

                        if (evt.target.readyState == FileReader.DONE) {
                            image.src = evt.target.result;
                            found = true;
                        }
                    };
                } else {
                    alert("not an image");
                }
            });

            ;
        }
    };
});