'use strict';

System.register(['../globalVars/canvas.js'], function (_export, _context) {
    "use strict";

    var canvas;
    function canvasSizing() {
        canvas.eleDOM.width = document.body.clientWidth;
        canvas.eleDOM.height = document.body.clientHeight;
    }
    _export('canvasSizing', canvasSizing);

    return {
        setters: [function (_globalVarsCanvasJs) {
            canvas = _globalVarsCanvasJs.canvas;
        }],
        execute: function () {
            ;
        }
    };
});