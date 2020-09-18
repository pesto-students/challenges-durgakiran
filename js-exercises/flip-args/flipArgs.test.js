import { flipArgs } from './flipArgs';

describe('Flipped Arguments', () => {
  test('It should be able invoke callback function', () => {
    const mockFunction = jest.fn();
    const FlipArgs = flipArgs(mockFunction);
    FlipArgs(1, 2, 3);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
  test('It should be able to call the callback function with reversed arguments', () => {
    const mockFunction = jest.fn();
    const FlipArgs = flipArgs(mockFunction);
    FlipArgs(1, 2, 3);
    expect(mockFunction).toHaveBeenCalledWith(3, 2, 1);
    FlipArgs('a', 'b', 'c');
    expect(mockFunction).toHaveBeenCalledWith('c', 'b', 'a');
    FlipArgs('a', 'b', [1, 2, 'c']);
    expect(mockFunction).toHaveBeenCalledWith([1, 2, 'c'], 'b', 'a');
  });
  test('It should be able to call the callback function with reversed arguments', () => {
    const mockFunction = jest.fn();
    const FlipArgs = flipArgs(mockFunction);
    FlipArgs(1, 2, 3);
    expect(mockFunction).toHaveBeenCalledWith(3, 2, 1);
    FlipArgs('a', 'b', 'c');
    expect(mockFunction).toHaveBeenCalledWith('c', 'b', 'a');
    FlipArgs('a', 'b', [1, 2, 'c']);
    expect(mockFunction).toHaveBeenCalledWith([1, 2, 'c'], 'b', 'a');
  });
});
