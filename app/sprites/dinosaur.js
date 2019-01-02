import { canvas } from '../globalVars/canvas.js';
import { randomix } from '../utills/randomixes.js';
import { pixelCutter } from '../utills/pixelCutter.js';


export class Dinosaur {
    constructor(ctx) {
        this.ctx = ctx;

        this.head = {
            width: 200,
            height: 100,
            
        };
        this.body = {};
        this.leftArm = {};
        this.rightArm = {};
        this.leftLeg = {};
        this.rightLeg = {};
        this.tail = {};
    }

    createHead() {
        this.head.array = [];

        for (let i = 0; i < this.head.height; i += 5) {
            for(let j = 0; j < this.head.width; j += 5) {
                
                let options = {
                    x: canvas.w/2 + j,
                    y: canvas.h - 300 + i,
                    active: true,
                    color: `rgba(0, 0, 0, 0)`
                }

                this.head.array.push(options);
            }
        }

        console.log(this.head.array);

        pixelCutter(this.head.array, 11, 0); pixelCutter(this.head.array, 24, 17);
        pixelCutter(this.head.array, 6, 40); pixelCutter(this.head.array, 11, 69);
        pixelCutter(this.head.array, 5, 80); pixelCutter(this.head.array, 2, 93); pixelCutter(this.head.array, 4, 116); pixelCutter(this.head.array, 4, 120);
        pixelCutter(this.head.array, 3, 132); pixelCutter(this.head.array, 2, 158); pixelCutter(this.head.array, 3, 160);
        pixelCutter(this.head.array, 1, 173); pixelCutter(this.head.array, 2, 198); pixelCutter(this.head.array, 2, 200);
        pixelCutter(this.head.array, 1, 239); pixelCutter(this.head.array, 1, 240);
        pixelCutter(this.head.array, 1, 279); 
        pixelCutter(this.head.array, 1, 319);
        pixelCutter(this.head.array, 1, 359);
        pixelCutter(this.head.array, 20, 380);
        pixelCutter(this.head.array, 21, 419);
        pixelCutter(this.head.array, 20, 460);
        pixelCutter(this.head.array, 19, 501);
        
        
        


        for ( let i = 0; i < this.head.array.length; i++) {
            if (this.head.array[i].active) {
                this.head.array[i].color = 'rgba(0, 128, 255, 1)'/*`rgba(${randomix(255)}, ${randomix(255)}, ${randomix(255)}, 1)`;*/
            } else {
                this.head.array[i].color = 'rgba(0, 0, 0, 0)';
            }
        }
    }

    drawHead() {
        this.ctx.clearRect(0, canvas.h/2, canvas.w, canvas.h/2);
        
        this.ctx.beginPath();
        for (let i = 0; i < this.head.array.length; i++) {
            this.ctx.fillStyle = this.head.array[i].color;
            this.ctx.fillRect(this.head.array[i].x, this.head.array[i].y, 5, 5);

            this.ctx.strokeStyle = 'rgba(22, 22, 22, 1)';
            this.ctx.strokeRect(this.head.array[i].x, this.head.array[i].y, 5, 5);
            
        }
        

    }

    createBody() {

    }

    leftArm() {

    }

}