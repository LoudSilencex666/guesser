import { gameMode } from '../globalVars/gameMode.js';
import { image, wyjebanyArray, wyjebanyArray2, imageRGBA } from '../globalVars/images.js';
import { canvas } from '../globalVars/canvas.js';

const input = document.querySelector('.loadImage');
const imageContainer = document.querySelector('.image-container');

let found = false 

input.addEventListener('change', (evt) => {
    let file = evt.target.files[0];

    if(file.type.match('image.*')) {
        let reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = function(evt){
            
            if( evt.target.readyState == FileReader.DONE) {
                image.src = evt.target.result;
                found = true
            }

        }    

    } else {
        alert("not an image");
    }
});

export function getImage() {
    let imageWidth = canvas.w;
    let imageHeight = canvas.h;
    
    if (found) {
        canvas.ctx.drawImage(image, 0, 0, imageWidth, imageHeight);
        
        let pixel = canvas.ctx.getImageData(0, 0, imageWidth, imageHeight);
        imageRGBA.push(pixel.data);
        
        for (let i = 0; i < imageHeight; i++) {
            for(let j = 0; j < imageWidth; j++) {
                wyjebanyArray.push({
                    x : j,
                    y : i
                })
            }
        }

        let index = 0;

        for (let i = 0; i < wyjebanyArray.length; i++) {
            wyjebanyArray[i].rgba1 = `rgba(${imageRGBA[0][index]-40}, ${imageRGBA[0][index+1]-40}, ${imageRGBA[0][index+2]-40}, ${imageRGBA[0][index+3]/255})`;
            wyjebanyArray[i].rgba2 = `rgba(${imageRGBA[0][index]+40}, ${imageRGBA[0][index+1]+40}, ${imageRGBA[0][index+2]+40}, ${imageRGBA[0][index+3]/255})`;

            index += 4;
        }

        for (let i = 0; i < wyjebanyArray.length; i += 10) {
            wyjebanyArray2.push(wyjebanyArray[i])
        }

        console.log(wyjebanyArray, wyjebanyArray2);
        canvas.ctx.clearRect(0,0, canvas.w, canvas.h); 
        imageContainer.style.display = 'none';
        gameMode.changeState(gameMode.option);
    }
};