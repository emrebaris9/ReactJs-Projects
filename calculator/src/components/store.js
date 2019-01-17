import EventEmitter from 'wolfy87-eventemitter';

export const ee = new EventEmitter();

export const store = {
    displayedExpression: 0,
    get curExpression() {
        return this.displayedExpression;
    },
    set newExpression(curExpression) {
        this.displayedExpression = curExpression;
        ee.emitEvent('displayUpdate', [this.curExpression]);
       
    }
};
