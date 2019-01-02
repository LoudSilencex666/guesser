"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var time;
    return {
        setters: [],
        execute: function () {
            _export("time", time = {
                startTime: Date.now(),
                gameTime: 0,
                spriteRefresh: 0
            });

            _export("time", time);
        }
    };
});