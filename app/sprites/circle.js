import { canvas } from '../globalVars/canvas.js';

export class Circle {
    constructor(ctx, x, y, radius, strokeWidth, color1, color2, rotateSpeed) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.strokeWidth = strokeWidth;
        this.color1 = color1;
        this.color2 = color2;
        this.gradientPos = [this.x - (this.strokeWidth/2 + this.radius), this.y - (this.strokeWidth/2 + this.radius), this.x + (this.strokeWidth/2 + this.radius), this.y + (this.strokeWidth/2 + this.radius)]
        this.gradientColor = this.ctx.createLinearGradient(this.gradientPos[0], this.gradientPos[1], this.gradientPos[2], this.gradientPos[3]);
        this.rotateSpeed = rotateSpeed;
        this.rotateAngle = 0;
        this.rgba = [];
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.lineWidth = this.strokeWidth;
        this.gradientColor.addColorStop('0', this.color1);
        this.gradientColor.addColorStop('1', this.color2);
        this.ctx.strokeStyle = this.gradientColor;
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.stroke();
        
    }

    move() {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate((Math.PI / 180) * this.rotateAngle);
        this.ctx.beginPath();
        
        this.ctx.lineWidth = this.strokeWidth;
        this.gradientPos = [-(this.strokeWidth/2 + this.radius), -(this.strokeWidth/2 + this.radius), this.strokeWidth/2 + this.radius, this.strokeWidth/2 + this.radius];
        this.gradientColor = this.ctx.createLinearGradient(this.gradientPos[0], this.gradientPos[1], this.gradientPos[2], this.gradientPos[3]);
        this.gradientColor.addColorStop('0', this.color1);
        this.gradientColor.addColorStop('1', this.color2);

        this.ctx.strokeStyle  = this.gradientColor;
        this.ctx.arc(0, 0, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'rgba(0,0,0,0)';
        this.ctx.fill();
        this.ctx.stroke();

        this.rotateAngle += this.rotateSpeed;
        this.ctx.restore();
    }

}