import { gameMode } from '../globalVars/gameMode.js';
import { founder, randomix, randomixRGB, randomixV2 } from '../utills/randomixes.js';
import { canvas } from '../globalVars/canvas.js';
import * as circleVars from '../globalVars/circle.js';
import * as font from '../globalVars/font.js';
import { Circle } from '../sprites/circle.js';
import { singleWord } from '../globalVars/words.js';
import { updateScore, scoreCounter } from '../utills/scoreCounter.js';

let startTime = Date.now();
let gameTime = 0;
let spritesrefresh = 0;

export function gameWord() {
    gameTime += (Date.now() - startTime) / 1000;

    canvas.ctx.clearRect(0,0, canvas.w, canvas.h); 
    canvas.ctx.textAlign = 'center';
    canvas.ctx.textBaseline = 'middle';
    canvas.ctx.font = `${font.fontSize}px PT Sans`;
    canvas.ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    canvas.ctx.fillText(singleWord[0], canvas.w/2, canvas.h/2);

    if(gameTime > spritesrefresh) {
        randomixV2(canvas.w/2 - canvas.w/12 * singleWord[0].length/2, canvas.w/2 + canvas.w/12 * singleWord[0].length/2, canvas.h/2 - font.fontSize/2, canvas.h/2 + font.fontSize/2);
        
        if(founder.found) {
            circleVars.sprites.circles.push({
            circle :  new Circle(canvas.ctx, circleVars.x, circleVars.y, circleVars.radius, circleVars.strokeWidth, randomixRGB(), randomixRGB(), 25)
                });

            founder.found = false;
        }
        gameTime = 0;
        startTime = Date.now();
    }

    for(let i = 0; i < circleVars.sprites.circles.length; i++) {
        circleVars.sprites.circles[i].circle.move();
    }
   
    circleVars.sprites.spritesCounter = circleVars.sprites.circles.length;
    
    scoreCounter();
    updateScore();

}