import { deepEqual } from './deepEqual';

describe('deepEquals', () => {
  test('it should throw error if sufficient args not passed', () => {
    try {
      deepEqual({});
    } catch (error) {
      expect(error).toBeInstanceOf(TypeError);
    }
  });

  test('it should return true, if both args are primitive', () => {
    expect(deepEqual(1, 1)).toBe(true);
  });

  test('it should return true, if both args are have same reference', () => {
    const obj = { name: 'kiran' };
    expect(deepEqual(obj, obj)).toBe(true);
  });

  test('it should return false, if both args are primitive and not same', () => {
    expect(deepEqual(2, 1)).toBe(false);
  });

  test('it should return false, if both args are objectives and not same', () => {
    expect(deepEqual({ name: 'kiran' }, { name: 'kumar' })).toBe(false);
    expect(deepEqual({ name: 'kiran', lastName: 'palakurthi' }, { name: 'kumar' })).toBe(false);
    expect(deepEqual({ name: 'kiran', lastName: 'palakurthi' }, { name: 'kumar', firstName: 'Durga' })).toBe(false);
  });

  test('it should be able to compare objects deeply', () => {
    let obj1 = {
      firstName: 'Durga', middleName: 'Kiran Kumar', lastName: 'Palakurthi', address: { state: 'AP' },
    };
    let obj2 = {
      firstName: 'Durga', middleName: 'Kiran Kumar', lastName: 'Palakurthi', address: { state: 'AP' },
    };
    expect(deepEqual(obj1, obj2)).toBe(true);
    obj1 = [1, 2, 3, 4, 5];
    obj2 = [1, 2, 3, 4, 5];
    expect(deepEqual(obj1, obj2)).toBe(true);
    obj1 = [1, 2, 3, 4, {
      firstName: 'Durga', middleName: 'Kiran Kumar', lastName: 'Palakurthi', address: { state: 'AP' },
    }];
    obj2 = [1, 2, 3, 4, {
      firstName: 'Durga', middleName: 'Kiran Kumar', lastName: 'Palakurthi', address: { state: 'JK' },
    }];
    expect(deepEqual(obj1, obj2)).toBe(false);
  });

  test('it should be able to compare objects deeply with descriptors', () => {
    const obj1 = {
      firstName: 'Durga', middleName: 'Kiran Kumar', lastName: 'Palakurthi', address: { state: 'AP' },
    };
    const obj2 = {
      firstName: 'Durga', middleName: 'Kiran Kumar', lastName: 'Palakurthi', address: { state: 'AP' },
    };
    expect(deepEqual(obj1, obj2, true)).toBe(true);
    Object.defineProperty(obj1, 'a', { value: 5, enumerable: false });
    Object.defineProperty(obj2, 'a', { value: 5, enumerable: true });
    expect(deepEqual(obj1, obj2, true)).toBe(false);
  });
});
