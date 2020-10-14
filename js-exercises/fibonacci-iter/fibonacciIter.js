const fibonacciIter = {
    previousValue: 0,
    currentValue: 1,
    [Symbol.iterator]() {
        return this;
    },
    next() {
        const tmp = this.currentValue;
        this.currentValue += this.previousValue;
        this.previousValue = tmp;
        return {
            value: this.currentValue,
            done: false,
        };
    },
};

export { fibonacciIter };
