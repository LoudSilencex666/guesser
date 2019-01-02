import { canvas } from '../globalVars/canvas.js';
import { gameMode } from '../globalVars/gameMode.js';
import * as font from '../globalVars/font.js';

export function menuSizing() {
    canvas.ctx.clearRect(0,0, canvas.w, canvas.h); 
    canvas.eleDOM = window.document.querySelector('#logo');

    canvas.eleDOM.width = document.body.clientWidth * 90 /100;
    canvas.eleDOM.height = document.body.clientHeight * 70 /100;

    font.fontSize = canvas.w * canvas.h / font.logoRatio;
    gameMode.changeState('menu');
};
