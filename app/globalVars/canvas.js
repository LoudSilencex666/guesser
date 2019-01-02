export const canvas = {
    eleDOM : window.document.querySelector('#guesser'),
    get w() {
        return this.eleDOM.width;
    },
    get h() {
        return this.eleDOM.height;
    }, 
    get ctx() {
        return this.eleDOM.getContext('2d');
    }
}

