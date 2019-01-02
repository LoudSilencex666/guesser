"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var score, results;
    return {
        setters: [],
        execute: function () {
            _export("score", score = {
                score: 0,
                currentStage: 0,
                maxStage: 12,
                succesfullStage: 12,

                easyScoreStart: 100000,
                mediumScoreStart: 250000,
                hardScoreStart: 1000000,

                easyLose: 9500,
                mediumLose: 23750,
                hardLose: 95000
            });

            _export("score", score);

            _export("results", results = {
                postGameStats: true,
                easyResult: score.easyScoreStart,
                mediumResult: score.mediumScoreStart,
                hardResult: score.hardScoreStart
            });

            _export("results", results);
        }
    };
});