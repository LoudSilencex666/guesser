'use strict';

System.register(['../globalVars/canvas.js'], function (_export, _context) {
    "use strict";

    var canvas;
    function menuSizing() {
        canvas.eleDOM.width = document.body.clientWidth * 90 / 100;
        canvas.eleDOM.height = document.body.clientHeight * 70 / 100;
    }
    _export('menuSizing', menuSizing);

    return {
        setters: [function (_globalVarsCanvasJs) {
            canvas = _globalVarsCanvasJs.canvas;
        }],
        execute: function () {
            ;
        }
    };
});