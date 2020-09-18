import { cacheFunction } from './cacheFunction';

describe('cacheFunction', () => {
  it('should return a function', () => {
    expect(typeof cacheFunction()).toBe('function');
  });
  it('The cached function should return the correct result', () => {
    const foo = x => (x * x);
    const cachedFunction = cacheFunction(foo);
    expect(cachedFunction(5)).toBe(25);
  });
  it('should cache function results and not rerun the original callback if the same arguments are presented', () => {
    const foo = jest.fn();
    const myCachedFunction = cacheFunction(foo);
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(10);
    myCachedFunction(10);
    myCachedFunction(10);
    myCachedFunction(10);
    myCachedFunction(10);
    expect(foo).toHaveBeenCalledTimes(2);
  });
  it('The cached function should return the correct result for multiple arguments', () => {
    const foo = (x, y) => (x * y);
    const cachedFunction = cacheFunction(foo);
    expect(cachedFunction(5, 6)).toBe(30);
  });
  it('The cached function should return the correct result for no arguments', () => {
    const foo = () => 5;
    const cachedFunction = cacheFunction(foo);
    expect(cachedFunction()).toBe(5);
  });
  it('The cached function should execute as expected for undesired parameters', () => {
    const foo = (x, y) => (x * y);
    const cachedFunction = cacheFunction(foo);
    expect(cachedFunction(5)).toBe(NaN);
    expect(cachedFunction(5, 'a')).toBe(NaN);
    expect(cachedFunction('a', 'a')).toBe(NaN);
  });
});
