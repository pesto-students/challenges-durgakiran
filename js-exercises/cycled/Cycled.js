function Cycled(...args) {
    let currentIndex = 0;
    const iterable = {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            currentIndex = (currentIndex + 1) % args[0].length;
            return args[0][currentIndex];
        },
        current() {
            return args[0][currentIndex];
        },
        previous() {
            currentIndex = (args[0].length - 1 + currentIndex) % args[0].length;
            return args[0][currentIndex];
        },
        step(steps) {
            currentIndex = (args[0].length + steps + currentIndex) % args[0].length;
            return args[0][currentIndex];
        },
        reversed() {
            const reversedArr = args[0].map((_, index) => args[0][args[0].length - 1 - index]);
            return reversedArr[Symbol.iterator]();
        },
        get index() {
            return currentIndex;
        },
        set index(value) {
            if (value > 0 && value < args[0].length) {
                currentIndex = value;
            }
        },
        indexOf(value) {
            let index = 0;
            while (index < args[0].length) {
                if (value === args[0][index]) {
                    return index;
                }
                index += 1;
            }
            return -1;
        },
    };
    return iterable;
}

export { Cycled };
