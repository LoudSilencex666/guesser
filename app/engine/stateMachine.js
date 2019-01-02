export class StateMachine {
    constructor() {
        this.gameState = new Map();
        this.currentState = '';
        this.option = '';
    }

    addState(name, f) {
        this.gameState.set(name, f);
    }

    changeState(name, option) {
        this.currentState = name;
        this.option = option;
    }

    updateState() {
        let f = this.gameState.get(this.currentState);
        f();
    }
}