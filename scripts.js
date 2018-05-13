'use strict';

const canvas = document.querySelector('#guesser');
const ctx = canvas.getContext('2d');  
const divider = 0.7;   

let init = () => {
    window.requestAnimationFrame(draw);
}

let randomix = (z) => {
    let result = Math.floor((Math.random() * z) + 1 );
    return result;
}

let i = 1;
let randomGradientColor;
let r = randomix(255);
let g = randomix(255);
let b = randomix(255);
let r1 = randomix(255);
let g1 = randomix(255);
let b1 = randomix(255);
let circleX;
let circleY;
let circleLineWidth;
let circleRadius;
let gradientPos = [];

function draw() {

    ctx.clearRect(0,0, 600, 600); 
    
    circleX = 300;
    circleY = 300;
    circleLineWidth = 10;
    circleRadius = 30;

    gradientPos = [circleX - (circleLineWidth/2 + circleRadius/2), circleY - (circleLineWidth/2 + circleRadius/2), circleX + (circleLineWidth/2 + circleRadius/2), circleY + (circleLineWidth/2 + circleRadius/2)];

    ctx.beginPath();
    ctx.lineWidth = circleLineWidth;
    randomGradientColor = ctx.createLinearGradient(gradientPos[0], gradientPos[1], gradientPos[2], gradientPos[3]);    
    randomGradientColor.addColorStop("0",`rgb(${r},${g},${b}`);
    randomGradientColor.addColorStop("1.0",`rgb(${r1},${g1},${b1}`);
    ctx.strokeStyle  = randomGradientColor;
    ctx.arc(circleX, circleY, circleRadius, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.save();

    ctx.translate(circleX, circleY);



    ctx.rotate((Math.PI / 180) * i)
    ctx.beginPath();
    randomGradientColor = ctx.createLinearGradient(-20, -20, 20, 20);
    randomGradientColor.addColorStop("0",`rgb(${r},${g},${b}`);
    randomGradientColor.addColorStop("1.0",`rgb(${r1},${g1},${b1}`);
    ctx.strokeStyle  = randomGradientColor;
    ctx.arc(0, 0, circleRadius, 0, 2 * Math.PI);
    ctx.stroke();
    /*
    ctx.arc(70, 70, circleRadius, 0, 2 * Math.PI);
    ctx.strokeStyle  = randomGradientColor;
    ctx.stroke();

*/
    ctx.restore();
    i += 10;
    console.log(i)


    window.requestAnimationFrame(draw);

}
init();