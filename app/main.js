import { gameMode } from './globalVars/gameMode.js';
import { update } from './states/update.js';

import { menuSizing } from './states/menuSizing.js';
import { menu } from './states/menu.js';
import { gameSizing } from './states/gameSizing.js';
import { gameWord } from './states/gameWord.js';
import { canvasSizing }  from './states/canvasSizing.js'; 
import { gameDoubleWord } from './states/gameDoubleWord.js';
import { gameSentence } from './states/gameSentence.js';
import { gameImage } from './states/gameImage.js';
import { getImage } from './states/getImage.js';
import { gameCreditsSetup } from './states/gameCreditsSetup.js';
import { gameCredits } from './states/gameCredits.js';
import { clearingScene } from './states/clearingScene.js';
import { wordShuffle } from './states/wordShuffle.js';
import { checkingAnswer } from './states/checkingAnswer.js';
import { postGameStats } from './states/postGameStats.js';

import { canvas } from './globalVars/canvas.js';
import  * as font from './globalVars/font.js';

import * as UI from './UI/menu-events.js';
import { randomixImage } from './utills/randomixes.js';







let init = () => {
    gameMode.addState('menuSizing', menuSizing);
    gameMode.addState('menu', menu);
    gameMode.addState('gameSizing', gameSizing);
    gameMode.addState('gameWord', gameWord);
    gameMode.addState('gameDoubleWord', gameDoubleWord);
    gameMode.addState('gameSentence', gameSentence);
    gameMode.addState('gameImage', gameImage);
    gameMode.addState('getImage', getImage);
    gameMode.addState('gameCreditsSetup', gameCreditsSetup);
    gameMode.addState('gameCredits', gameCredits);
    gameMode.addState('clearingScene', clearingScene);
    gameMode.addState('wordShuffle', wordShuffle);
    gameMode.addState('checkingAnswer', checkingAnswer);
    gameMode.addState('postGameStats', postGameStats);

    gameMode.changeState('menuSizing'); 

    update();

}




init();
