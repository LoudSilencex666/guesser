'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var canvas;
    return {
        setters: [],
        execute: function () {
            _export('canvas', canvas = {
                eleDOM: window.document.querySelector('#guesser'),
                get w() {
                    return this.eleDOM.width;
                },
                get h() {
                    return this.eleDOM.height;
                },
                get ctx() {
                    return this.eleDOM.getContext;
                }
            });

            _export('canvas', canvas);
        }
    };
});