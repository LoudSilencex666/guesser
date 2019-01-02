import { gameMode } from '../globalVars/gameMode.js';
import { founder, randomixCredits } from '../utills/randomixes.js';
import { canvas } from '../globalVars/canvas.js';
import * as font from '../globalVars/font.js';
import { credits } from '../globalVars/words.js';
import * as circleVars from '../globalVars/circle.js';
import { Circle } from '../sprites/circle.js';
import { Dinosaur } from '../sprites/dinosaur.js';


let spriteX = 0;
let spriteY = 0; ,
let tick = 0;

export function gameCredits() {
    

    for ( let i = 0; i < 100; i++ ) {
    randomixCredits();

        if (founder.found) {
            circleVars.sprites.circles.push({
                circle :  new Circle(canvas.ctx, circleVars.x, circleVars.y, circleVars.radius, circleVars.strokeWidth, circleVars.rgba[0], circleVars.rgba[1], 25)
            });
            founder.found = false;

            circleVars.sprites.circles[circleVars.sprites.circles.length-1].circle.draw();
        }
    
    }

    canvas.ctx.clearRect(0, canvas.h/2, canvas.w, canvas.h);
    canvas.ctx.drawImage(circleVars.sprites.credits[0].image, spriteX * 867, spriteY * 650, 867, 650, canvas.w-650-200, canvas.h-450, 650, 450);

    canvas.ctx.drawImage(circleVars.sprites.credits[1].image, spriteX * 600, spriteY * 504, 600, 504, 200, canvas.h-504, 600, 504);
    if (tick === 6) {
        if (spriteX < 20) {
            spriteX++;
        } else {
            spriteX = 0;
        }
        tick = 0; 

    }

    tick++
       
   
    circleVars.sprites.spritesCounter = circleVars.sprites.circles.length;
    console.log(circleVars.sprites.spritesCounter)
}