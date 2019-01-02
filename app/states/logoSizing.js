import { canvas } from '../globalVars/canvas.js';

export function logoSizing() {
    canvas.eleDOM.width = document.body.clientWidth * 90 /100;
    canvas.eleDOM.height = document.body.clientHeight * 70 /100;
};
