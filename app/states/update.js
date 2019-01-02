import { gameMode } from '../globalVars/gameMode.js';

export function update() {
    gameMode.updateState();

    window.requestAnimationFrame(update);
}