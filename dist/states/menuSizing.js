'use strict';

System.register(['../globalVars/canvas.js', '../globalVars/gameMode.js', '../globalVars/font.js'], function (_export, _context) {
    "use strict";

    var canvas, gameMode, font;
    function menuSizing() {
        canvas.ctx.clearRect(0, 0, canvas.w, canvas.h);
        canvas.eleDOM = window.document.querySelector('#logo');

        canvas.eleDOM.width = document.body.clientWidth * 90 / 100;
        canvas.eleDOM.height = document.body.clientHeight * 70 / 100;

        font.fontSize = canvas.w * canvas.h / font.logoRatio;
        gameMode.changeState('menu');
    }
    _export('menuSizing', menuSizing);

    return {
        setters: [function (_globalVarsCanvasJs) {
            canvas = _globalVarsCanvasJs.canvas;
        }, function (_globalVarsGameModeJs) {
            gameMode = _globalVarsGameModeJs.gameMode;
        }, function (_globalVarsFontJs) {
            font = _globalVarsFontJs;
        }],
        execute: function () {
            ;
        }
    };
});