'use strict';

System.register(['../globalVars/gameMode.js'], function (_export, _context) {
    "use strict";

    var gameMode;
    function update() {
        gameMode.updateState();

        window.requestAnimationFrame(update);
    }

    _export('update', update);

    return {
        setters: [function (_globalVarsGameModeJs) {
            gameMode = _globalVarsGameModeJs.gameMode;
        }],
        execute: function () {}
    };
});