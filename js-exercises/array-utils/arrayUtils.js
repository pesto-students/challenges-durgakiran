const sharedUtils = {

  customForEach(cb, thisArg) {
    if (this == null) {
      throw new TypeError('called on a null or undefined');
    }

    if (typeof cb !== 'function') {
      throw new TypeError('First argument must be a function');
    }

    const originalObject = Object(this);
    const len = originalObject.length;
    let i = 0;

    while (i < len) {
      if (i in originalObject) {
        /**
         * TODO: Dynamic  context binding will fail for arrow functions
         * Find work-around
         */
        cb.call(thisArg, originalObject[i], i, originalObject);
      }
      i += 1;
    }
  },

  customMap(cb, thisArg) {
    if (this == null) {
      throw new TypeError('called on a null or undefined');
    }

    if (typeof cb !== 'function') {
      throw new TypeError('First argument must be a function');
    }

    const originalObject = Object(this);
    const len = originalObject.length;
    const newArray = Array(len);
    let i = 0;

    while (i < len) {
      if (i in originalObject) {
        const mappedValue = cb.call(thisArg, originalObject[i], i, originalObject);
        newArray[i] = mappedValue;
      }
      i += 1;
    }

    return newArray;
  },

  customFilter(cb, thisArg) {
    if (this == null) {
      throw new TypeError('called on a null or undefined');
    }

    if (typeof cb !== 'function') {
      throw new TypeError('First argument must be a function');
    }

    const originalObject = Object(this);
    const len = originalObject.length;
    const newArray = [];
    let i = 0;

    while (i < len) {
      if (i in originalObject) {
        const isConditionSatisfied = cb.call(thisArg, originalObject[i], i, originalObject);
        if (isConditionSatisfied) {
          newArray.push(originalObject[i]);
        }
      }
      i += 1;
    }

    return newArray;
  },

  customReduce(cb, initialValue) {
    if (this == null) {
      throw new TypeError('called on a null or undefined');
    }

    if (typeof cb !== 'function') {
      throw new TypeError('First argument must be a function');
    }

    const originalObject = Object(this);
    const len = originalObject.length;

    if (!initialValue && len === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }

    let accumulator = initialValue || originalObject[0];
    let i = 0;

    while (i < len) {
      if (i in originalObject) {
        accumulator = cb(accumulator, originalObject[i], i, originalObject);
      }
      i += 1;
    }

    return accumulator;
  },

};

export {
  sharedUtils,
};
