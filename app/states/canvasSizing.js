import { canvas } from '../globalVars/canvas.js';

export function canvasSizing() {
    canvas.eleDOM.width = document.body.clientWidth;
    canvas.eleDOM.height = document.body.clientHeight;
};
