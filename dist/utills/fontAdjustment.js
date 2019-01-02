'use strict';

System.register(['../globalVars/font.js', '../globalVars/canvas.js'], function (_export, _context) {
    "use strict";

    var font, canvas;
    function menuAdjustment() {
        font.fontSize = canvas.w * canvas.h / font.logoRatio;
        canvas.eleDOM = window.document.querySelector('#logo');
    }

    _export('menuAdjustment', menuAdjustment);

    return {
        setters: [function (_globalVarsFontJs) {
            font = _globalVarsFontJs;
        }, function (_globalVarsCanvasJs) {
            canvas = _globalVarsCanvasJs.canvas;
        }],
        execute: function () {}
    };
});