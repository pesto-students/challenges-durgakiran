import { sharedUtils } from './arrayUtils';

describe('forEach', () => {
  test('It should loop through all the elements in the provided array', () => {
    const cb = jest.fn();
    const { customForEach } = sharedUtils;
    customForEach.call([1, 2, 3], cb);
    expect(cb).toHaveBeenCalledTimes(3);
  });

  test('It should"t loop for undefined elements', () => {
    const cb1 = jest.fn();
    const { customForEach } = sharedUtils;
    customForEach.call(Array(3), cb1);
    expect(cb1).toHaveBeenCalledTimes(0);
  });

  test('It should throw TypeError when first argument is not a function', () => {
    const { customForEach } = sharedUtils;
    try {
      customForEach.call(Array(3), undefined);
    } catch (error) {
      expect(error).toBeInstanceOf(TypeError);
    }
  });

  test('It"s dynamic bind context can be provided through a second argument', () => {
    const counter = {
      sum: 0,
      count: 0,
    };
    // eslint-disable-next-line no-extend-native
    Array.prototype.customForEach = sharedUtils.customForEach;
    [1, 2, 3].customForEach(function dummy(value) { this.sum += value; this.count += 1; }, counter);
    expect(counter.sum).toBe(6);
    expect(counter.count).toBe(3);
  });
});

describe('customMap', () => {
  test('It should loop through all the elements in the provided array', () => {
    const cb = jest.fn();
    const { customMap } = sharedUtils;
    customMap.call([1, 2, 3], cb);
    expect(cb).toHaveBeenCalledTimes(3);
  });

  test('It should"t loop for undefined elements', () => {
    const cb1 = jest.fn();
    const { customMap } = sharedUtils;
    customMap.call(Array(3), cb1);
    expect(cb1).toHaveBeenCalledTimes(0);
  });

  test('It should throw TypeError when first argument is not a function', () => {
    const { customMap } = sharedUtils;
    try {
      customMap.call(Array(3), undefined);
    } catch (error) {
      expect(error).toBeInstanceOf(TypeError);
    }
  });

  test('It"s dynamic bind context can be provided through a second argument', () => {
    const counter = {
      sum: 2,
      count: 3,
    };
      // eslint-disable-next-line no-extend-native
    Array.prototype.customMap = sharedUtils.customMap;
    const newArray = [1, 2, 3].customMap(function dummy(value) {
      return value + this.sum + this.count;
    }, counter);
    expect(newArray[0]).toBe(6);
    expect(newArray[1]).toBe(7);
    expect(newArray[2]).toBe(8);
  });
});

describe('customFilter', () => {
  test('It should loop through all the elements in the provided array', () => {
    const cb = jest.fn();
    const { customFilter } = sharedUtils;
    customFilter.call([1, 2, 3], cb);
    expect(cb).toHaveBeenCalledTimes(3);
  });

  test('It should"t loop for undefined elements', () => {
    const cb1 = jest.fn();
    const { customFilter } = sharedUtils;
    customFilter.call(Array(3), cb1);
    expect(cb1).toHaveBeenCalledTimes(0);
  });

  test('It should throw TypeError when first argument is not a function', () => {
    const { customFilter } = sharedUtils;
    try {
      customFilter.call(Array(3), undefined);
    } catch (error) {
      expect(error).toBeInstanceOf(TypeError);
    }
  });

  test('It"s dynamic bind context can be provided through a second argument', () => {
    const counter = {
      sum: 2,
      count: 3,
    };
    // eslint-disable-next-line no-extend-native
    Array.prototype.customFilter = sharedUtils.customFilter;
    const newArray = [1, 2, 3].customFilter(function dummy(value) {
      return value < this.count;
    }, counter);
    expect(newArray[0]).toBe(1);
    expect(newArray[1]).toBe(2);
  });
});

describe('customReducer', () => {
  test('It should loop through all the elements in the provided array', () => {
    const cb = jest.fn();
    const { customReduce } = sharedUtils;
    customReduce.call([1, 2, 3], cb);
    expect(cb).toHaveBeenCalledTimes(3);
  });

  test('It should"t loop for undefined elements', () => {
    const cb1 = jest.fn();
    const { customReduce } = sharedUtils;
    customReduce.call(Array(3), cb1);
    expect(cb1).toHaveBeenCalledTimes(0);
  });

  test('It should throw TypeError when first argument is not a function', () => {
    const { customReduce } = sharedUtils;
    try {
      customReduce.call(Array(3), undefined);
    } catch (error) {
      expect(error).toBeInstanceOf(TypeError);
    }
  });

  test('It should throw TypeError when called upon an empty array', () => {
    const { customReduce } = sharedUtils;
    const cb = jest.fn();
    try {
      customReduce.call([], cb);
    } catch (error) {
      expect(error).toBeInstanceOf(TypeError);
    }
  });

  test('It must take initial accumulator value from provided initial value if given', () => {
    const { customReduce } = sharedUtils;
    const reducedValue = customReduce.call([1, 2, 3],
      (accumulator, currentValue) => accumulator + currentValue, 10);
    expect(reducedValue).toBe(16);
  });

  test('It must take initial accumulator value from first value of array if initial value not given', () => {
    const { customReduce } = sharedUtils;
    const reducedValue = customReduce.call([1, 2, 3],
      (accumulator, currentValue) => accumulator + currentValue);
    expect(reducedValue).toBe(7);
  });
});
