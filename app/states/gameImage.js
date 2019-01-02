import { gameMode } from '../globalVars/gameMode.js';
import { founder, randomixImage } from '../utills/randomixes.js';
import { canvas } from '../globalVars/canvas.js';
import * as circleVars from '../globalVars/circle.js';
import { Circle } from '../sprites/circle.js';
import { image, wyjebanyArray } from '../globalVars/images.js';



export function gameImage() {


   for ( let i = 0; i < 100; i++ ) {
    randomixImage(0, canvas.w, 0, canvas.h);

    if (founder.found) {
        circleVars.sprites.circles.push({
            circle :  new Circle(canvas.ctx, circleVars.x, circleVars.y, circleVars.imageRadius, circleVars.imageStrokeWidth, circleVars.rgba[0], circleVars.rgba[1], 25)
        });
        founder.found = false;
    }
    circleVars.sprites.circles[circleVars.sprites.circles.length-1].circle.draw();

   }
    

    
   
    circleVars.sprites.spritesCounter = circleVars.sprites.circles.length;
    console.log(circleVars.sprites.spritesCounter)
}