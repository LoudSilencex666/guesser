'use strict';

System.register(['../globalVars/score.js'], function (_export, _context) {
    "use strict";

    var score, results, gamingMenuElements;
    function postGameStats() {
        if (results.postGameStats === true) {
            gamingMenuElements.ele1.style.display = 'none';
            gamingMenuElements.ele2.style.display = 'none';
            gamingMenuElements.ele3.style.display = 'none';
            gamingMenuElements.postStats.style.display = 'flex';

            gamingMenuElements.postScore.innerHTML = score.score;
            gamingMenuElements.postStage.innerHTML = score.succesfullStage + '  / ' + score.maxStage + ' ';

            results.postGameStats = false;
        }
    }
    _export('postGameStats', postGameStats);

    return {
        setters: [function (_globalVarsScoreJs) {
            score = _globalVarsScoreJs.score;
            results = _globalVarsScoreJs.results;
        }],
        execute: function () {
            gamingMenuElements = {
                ele1: document.querySelector('.ui-container'),
                ele2: document.querySelector('.stage'),
                ele3: document.querySelector('.score'),
                postStats: document.querySelector('.post-game-stats'),
                postScore: document.querySelector('.post-game-score-number'),
                postStage: document.querySelector('.post-game-stage-number')
            };
            ;
        }
    };
});