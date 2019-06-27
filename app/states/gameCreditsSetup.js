import { gameMode } from '../globalVars/gameMode.js';
import { imageArray, imageArray2, imageRGBA } from '../globalVars/images.js';
import { canvas } from '../globalVars/canvas.js';
import * as font from '../globalVars/font.js';
import { credits } from '../globalVars/words.js';
import * as circleVars from '../globalVars/circle.js';
import { Dinosaur } from '../sprites/dinosaur.js';

export function gameCreditsSetup() {

    canvas.ctx.textAlign = 'center';
    canvas.ctx.textBaseline = 'middle';
    canvas.ctx.font = `${font.fontSize}px PT Sans`;
    canvas.ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    canvas.ctx.fillText(credits[0][0], canvas.w/4, canvas.h/8);
    canvas.ctx.fillText(credits[0][1], canvas.w/4, canvas.h/8*3);
    canvas.ctx.fillText(credits[0][2], canvas.w/4*3, canvas.h/8);
    canvas.ctx.fillText(credits[0][3], canvas.w/4*3, canvas.h/8*3);
    
    let pixel = canvas.ctx.getImageData(0, 0, canvas.w, canvas.h/2);
    imageRGBA.push(pixel.data);

    for (let i = 0; i < canvas.h/2; i++) {
        for(let j = 0; j < canvas.w; j++) {
            imageArray.push({
                x : j,
                y : i
            })
        }
    }

    let index = 0;
    for (let i = 0; i < imageArray.length; i++) {
        imageArray[i].rgba1 = `rgba(${imageRGBA[0][index]}, ${imageRGBA[0][index+1]}, ${imageRGBA[0][index+2]}, ${imageRGBA[0][index+3]/255})`;
        imageArray[i].rgba2 = `rgba(${imageRGBA[0][index]}, ${imageRGBA[0][index+1]}, ${imageRGBA[0][index+2]}, ${imageRGBA[0][index+3]/255})`;

        index += 4;
    }

    for (let i = 0; i < imageArray.length; i += 4) {
        imageArray2.push(imageArray[i])
    }

    let dinosaur = new Image();
    let nigga = new Image();
    dinosaur.src = "dist/images/dino.png";
    nigga.src = "dist/images/nigg.png";

    circleVars.sprites.credits[0] = {
        width: 867,
        height: 650,
        frames: 21,
        image: dinosaur
    }

    circleVars.sprites.credits[1] = {
        width: 600,
        height: 504,
        frames: 21,
        image: nigga
    }

    gameMode.changeState(gameMode.option);
    
};