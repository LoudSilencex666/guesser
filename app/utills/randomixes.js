import { canvas } from '../globalVars/canvas.js';
import * as circleVars from '../globalVars/circle.js';
import { Circle } from '../sprites/circle.js';
import { image, imageArray, imageArray2 } from '../globalVars/images.js';

let founder = {
    found: false
}

const randomix = (z) => {
    let result = Math.floor((Math.random() * z) + 1 );
    return result;
}

const randomixRGB = () => {
    let result = `rgb(${randomix(255)}, ${randomix(255)}, ${randomix(255)})`;
    return result;
}



const randomixV2 = (minX, maxX, minY, maxY) => {

    let resultX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    let resultY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
    let pixels = [canvas.ctx.getImageData(resultX + circleVars.strokeWidth/2 + circleVars.radius + 1, resultY, 1, 1), 
        canvas.ctx.getImageData(resultX - circleVars.strokeWidth/2 - circleVars.radius - 1, resultY, 1, 1), 
        canvas.ctx.getImageData(resultX, resultY + circleVars.strokeWidth/2 + circleVars.radius + 1, 1, 1), 
        canvas.ctx.getImageData(resultX, resultY - circleVars.strokeWidth/2 - circleVars.radius - 1, 1, 1)]; 
    let data = [pixels[0].data, pixels[1].data, pixels[2].data, pixels[3].data];
    
    for(let i = 0; i < data.length; i++) {
        circleVars.rgba[i] = `rgba(${data[i][0]}, ${data[i][1]}, ${data[i][2]}, ${data[i][3]/255})`;
    }
    
    for(let i = 0; i < circleVars.rgba.length; i++) {
        if(circleVars.rgba[i] === 'rgba(0, 0, 0, 1)') {
            circleVars.x = resultX;
            circleVars.y = resultY;
            founder.found = true;
        }
    }

}


const randomixImage = () => {
    let resultX;
    let resultY;
    let resultRGBA1;
    let resultRGBA2;

    if (imageArray2.length >= 0) {

        let index = Math.floor(Math.random() * (imageArray2.length -1 + 1)) + 0;

    
        resultX = imageArray2[index].x;
        resultY = imageArray2[index].y;
        resultRGBA1 = imageArray2[index].rgba1;
        resultRGBA2 = imageArray2[index].rgba2;

        imageArray2.splice(index, 1);

        circleVars.x = resultX;
        circleVars.y = resultY;
        circleVars.rgba[0] = resultRGBA1;
        circleVars.rgba[1] = resultRGBA2;
        founder.found = true;

    }

}

const randomixCredits = () => {
    let resultX;
    let resultY;
    let resultRGBA1;
    let resultRGBA2;
    
    if (imageArray2.length >= 1) {

        let index = Math.floor(Math.random() * (imageArray2.length -1 + 1)) + 0;

        resultX = imageArray2[index].x;
        resultY = imageArray2[index].y;
        resultRGBA1 = imageArray2[index].rgba1;
        resultRGBA2 = imageArray2[index].rgba2;

        if (resultRGBA1 === 'rgba(0, 0, 0, 1)') {
            circleVars.x = resultX;
            circleVars.y = resultY;
            circleVars.rgba[0] = randomixRGB();
            circleVars.rgba[1] = randomixRGB();
            founder.found = true;
        }
        
        if (imageArray2.length !== 0) {
            imageArray2.splice(index, 1);
        }

    }
}

export { founder, randomix, randomixRGB, randomixV2, randomixImage, randomixCredits };