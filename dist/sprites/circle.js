'use strict';

System.register(['../globalVars/canvas.js'], function (_export, _context) {
    "use strict";

    var canvas, _createClass, Circle;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_globalVarsCanvasJs) {
            canvas = _globalVarsCanvasJs.canvas;
        }],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export('Circle', Circle = function () {
                function Circle(ctx, x, y, radius, strokeWidth, color1, color2, rotateSpeed) {
                    _classCallCheck(this, Circle);

                    this.ctx = ctx;
                    this.x = x;
                    this.y = y;
                    this.radius = radius;
                    this.strokeWidth = strokeWidth;
                    this.color1 = color1;
                    this.color2 = color2;
                    this.gradientPos = [this.x - (this.strokeWidth / 2 + this.radius), this.y - (this.strokeWidth / 2 + this.radius), this.x + (this.strokeWidth / 2 + this.radius), this.y + (this.strokeWidth / 2 + this.radius)];
                    this.gradientColor = this.ctx.createLinearGradient(this.gradientPos[0], this.gradientPos[1], this.gradientPos[2], this.gradientPos[3]);
                    this.rotateSpeed = rotateSpeed;
                    this.rotateAngle = 0;
                    this.rgba = [];
                }

                _createClass(Circle, [{
                    key: 'draw',
                    value: function draw() {
                        this.ctx.beginPath();
                        this.ctx.lineWidth = this.strokeWidth;
                        this.gradientColor.addColorStop('0', this.color1);
                        this.gradientColor.addColorStop('1', this.color2);
                        this.ctx.strokeStyle = this.gradientColor;
                        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
                        this.ctx.stroke();
                    }
                }, {
                    key: 'move',
                    value: function move() {
                        this.ctx.save();
                        this.ctx.translate(this.x, this.y);
                        this.ctx.rotate(Math.PI / 180 * this.rotateAngle);
                        this.ctx.beginPath();

                        this.ctx.lineWidth = this.strokeWidth;
                        this.gradientPos = [-(this.strokeWidth / 2 + this.radius), -(this.strokeWidth / 2 + this.radius), this.strokeWidth / 2 + this.radius, this.strokeWidth / 2 + this.radius];
                        this.gradientColor = this.ctx.createLinearGradient(this.gradientPos[0], this.gradientPos[1], this.gradientPos[2], this.gradientPos[3]);
                        this.gradientColor.addColorStop('0', this.color1);
                        this.gradientColor.addColorStop('1', this.color2);

                        this.ctx.strokeStyle = this.gradientColor;
                        this.ctx.arc(0, 0, this.radius, 0, 2 * Math.PI);
                        this.ctx.fillStyle = 'rgba(0,0,0,0)';
                        this.ctx.fill();
                        this.ctx.stroke();

                        this.rotateAngle += this.rotateSpeed;
                        this.ctx.restore();
                    }
                }]);

                return Circle;
            }());

            _export('Circle', Circle);
        }
    };
});