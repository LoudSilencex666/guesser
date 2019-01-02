import { gameMode } from '../globalVars/gameMode.js';
import { founder, randomix, randomixRGB, randomixV2 } from '../utills/randomixes.js';
import { canvas } from '../globalVars/canvas.js';
import * as circleVars from '../globalVars/circle.js';
import * as font from '../globalVars/font.js';
import { Circle } from '../sprites/circle.js';

const ctx = canvas.ctx;
let logo = 'GALACTIC GUESSER'
let word = [];
word[0] = 'ZIPAA';
word[1] = 'CHODORA';
let sprites = {
    circles : [],
};
let spritesCounter = 0;
let startTime = Date.now();
let gameTime = 0;
let spritesrefresh = 0;

let test = 0;
export function draw() {

    gameTime += (Date.now() - startTime) / 1000;

    if(gameMode === 'Logo') {

        //canvas.ctx.clearRect(0,0, canvas.w, canvas.h); 
        canvas.ctx.textAlign = 'center';
        canvas.ctx.textBaseline = 'middle';
        canvas.ctx.font = `${font.fontSize}px PT Sans`;
        canvas.ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        canvas.ctx.fillText(logo, canvas.w/2, canvas.h/2);


        if(gameTime > spritesrefresh) {
            randomixV2(canvas.w/2 - canvas.w/16 * logo.length/2, canvas.w/2 + canvas.w/16 * logo.length/2, canvas.h/2 - font.fontSize/2, canvas.h/2 + font.fontSize/2);
            
            if(founder.found) {
                sprites.circles.push({
                circle :  new Circle(canvas.ctx, circleVars.x, circleVars.y, circleVars.radius, circleVars.strokeWidth, randomixRGB(), randomixRGB(), 25)
                });

                founder.found = false;
            }
            gameTime = 0;
            startTime = Date.now();
        }

    }

    if(gameMode === 'Word') {

        ctx.clearRect(0,0, canvas.w, canvas.h); 
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `${font.fontSize}px PT Sans`;
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillText(word[0], canvas.w/2, canvas.h/2);

        if(gameTime > spritesrefresh) {
            randomixV2(canvas.w/2 - canvas.w/12 * word[0].length/2, canvas.w/2 + canvas.w/12 * word[0].length/2, canvas.h/2 - font.fontSize/2, canvas.h/2 + font.fontSize/2);
            
            if(founder.found) {
                sprites.circles.push({
                circle :  new Circle(ctx, circleVars.x, circleVars.y, circleVars.radius, circleVars.strokeWidth, randomixRGB(), randomixRGB(), 25)
                });

                founder.found = false;
            }
            gameTime = 0;
            startTime = Date.now();
        }


    } else if (gameMode === 'DoubleWord') {
        
        ctx.clearRect(0,0, canvas.w, canvas.h); 
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `${font.fontSize}px PT Sans`;
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillText(word[0], canvas.w/2, canvas.h/4);
        ctx.fillText(word[1], canvas.w/2, canvas.h/4*3);

        if(gameTime > spritesrefresh) {
            randomixV2(canvas.w/2 - canvas.w/12 * word[0].length/2, canvas.w/2 + canvas.w/12 * word[0].length/2, canvas.h/4 - font.fontSize/2, canvas.h/4 + font.fontSize/2);
            
            if(founder.found) {
                sprites.circles.push({
                circle :  new Circle(ctx, circleVars.x, circleVars.y, circleVars.radius, circleVars.strokeWidth, randomixRGB(), randomixRGB(), 25)
                });
                
                founder.found = false;
            }

            randomixV2(canvas.w/2 - canvas.w/12 * word[1].length/2, canvas.w/2 + canvas.w/12 * word[1].length/2, canvas.h/4*3 - font.fontSize/2, canvas.h/4*3 + font.fontSize/2);
            
            if(founder.found) {
                sprites.circles.push({
                circle :  new Circle(ctx, circleVars.x, circleVars.y, circleVars.radius, circleVars.strokeWidth, randomixRGB(), randomixRGB(), 25)
                });

                founder.found = false;
            }

            gameTime = 0;
            startTime = Date.now();
        }


    }
    
    
    for(let i = 0; i < sprites.circles.length ; i++) {
        sprites.circles[i].circle.move();
    }
   
    spritesCounter = sprites.circles.length;
    
    

}