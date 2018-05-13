'use strict';

const canvas = document.querySelector('#guesser');
const ctx = canvas.getContext('2d');   

const randomix = (z) => {
    let result = Math.floor((Math.random() * z) + 1 );
    return result;
}

const randomixRGB = () => {
    let result = `rgb(${randomix(255)}, ${randomix(255)}, ${randomix(255)})`;
    return result;
}

let sprites = {
    circles : [],
};
let spritesCounter = 0;

class Circle {
    constructor(x, y, radius, strokeWidth, color1, color2, rotateSpeed) {
        this.x = x;
        this.y = y;
        this.radius = radius,
        this.strokeWidth = strokeWidth;
        this.color1 = color1;
        this.color2 = color2;
        this.gradientPos = [this.x - (this.strokeWidth/2 + this.radius/2), this.y - (this.strokeWidth/2 + this.radius/2), this.x + (this.strokeWidth/2 + this.radius/2), this.y + (this.strokeWidth/2 + this.radius/2)]
        this.gradientColor = ctx.createLinearGradient(this.gradientPos[0], this.gradientPos[1], this.gradientPos[2], this.gradientPos[3]);
        this.rotateSpeed = rotateSpeed;
        this.rotateAngle = 0;
    }

    draw() {
        ctx.beginPath();
        ctx.lineWidth = this.strokeWidth;
        this.gradientColor.addColorStop('0', this.color1);
        this.gradientColor.addColorStop('1', this.color2);
        ctx.strokeStyle = this.gradientColor;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
    }

    move() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((Math.PI / 180) * this.rotateAngle);
        ctx.beginPath();
        
        ctx.lineWidth = this.strokeWidth;
        this.gradientPos = [-(this.strokeWidth/2 + this.radius/2), -(this.strokeWidth/2 + this.radius/2), this.strokeWidth/2 + this.radius/2, this.strokeWidth/2 + this.radius/2];
        this.gradientColor = ctx.createLinearGradient(this.gradientPos[0], this.gradientPos[1], this.gradientPos[2], this.gradientPos[3]);
        this.gradientColor.addColorStop('0', this.color1);
        this.gradientColor.addColorStop('1', this.color2);

        ctx.strokeStyle  = this.gradientColor;
        ctx.arc(0, 0, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = '#222222';
        ctx.fill();
        ctx.stroke();

        this.rotateAngle += this.rotateSpeed;
        ctx.restore();
    }
}


function draw() {
    sprites.circles[spritesCounter] = new Circle(randomix(600), randomix(600), 10, 7, randomixRGB(), randomixRGB(), 25);

    ctx.clearRect(0,0, 600, 600); 
    
    for(let i = 0; i < spritesCounter; i++) {
        sprites.circles[i].move();
    }
    
    spritesCounter++;
    console.log(spritesCounter)
    window.requestAnimationFrame(draw);

}

let init = () => {
    window.requestAnimationFrame(draw);
}

init();