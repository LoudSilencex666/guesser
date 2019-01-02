import { score, results } from '../globalVars/score.js';

const gamingMenuElements = {
    ele1: document.querySelector('.ui-container'),
    ele2: document.querySelector('.stage'),
    ele3: document.querySelector('.score'),
    postStats: document.querySelector('.post-game-stats'),
    postScore: document.querySelector('.post-game-score-number'),
    postStage: document.querySelector('.post-game-stage-number')
}

export function postGameStats() {
    if ( results.postGameStats === true ) {
        gamingMenuElements.ele1.style.display = 'none';
        gamingMenuElements.ele2.style.display = 'none';
        gamingMenuElements.ele3.style.display = 'none';
        gamingMenuElements.postStats.style.display = 'flex';

        gamingMenuElements.postScore.innerHTML = score.score;
        gamingMenuElements.postStage.innerHTML = `${score.succesfullStage}  / ${score.maxStage} `;

        results.postGameStats = false;
    }
}; 
