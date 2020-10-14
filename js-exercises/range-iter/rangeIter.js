/* eslint-disable no-plusplus */
function rangeIter(lb, ub) {
    if (!Number.isSafeInteger(lb) || !Number.isSafeInteger(ub)) {
        throw new TypeError('undefined is not a number');
    }

    let currentIndex = 0;
    let currentValue = lb;
    const myCustomIterator = {
        [Symbol.iterator]() {
            return this;
        },
        next: () => {
            if (lb <= ub && currentIndex <= (ub - lb)) {
                currentIndex++;
                return { value: currentValue++ };
            }
            return { done: true };
        },
    };

    return myCustomIterator;
}

export { rangeIter };
