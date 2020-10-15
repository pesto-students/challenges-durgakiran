import { count, cycle, repeat } from './iterInfinite';

describe('functions', () => {
  describe('count', () => {
    test('should give incremented result', () => {
      const start = 10;
      const gen = count(start);
      [10, 11, 12, 13].forEach((value) => {
        expect(gen.next().value).toBe(value);
      });
    });

    test('should give step incremented result', () => {
      const start = 10;
      const step = 2;
      const gen = count(start, step);
      [10, 12, 14, 16].forEach((value) => {
        expect(gen.next().value).toBe(value);
      });
    });
  });
  describe('cycle', () => {
    test('should give cycled result', () => {
      const start = 'ABCD';
      const gen = cycle(start);
      ['A', 'B', 'C', 'D'].forEach((value) => {
        expect(gen.next().value).toBe(value);
      });
      const gen1 = cycle([1, 2, 3, 4]);
      [1, 2, 3, 4].forEach((value) => {
        expect(gen1.next().value).toBe(value);
      });
    });

    test('should stop after n iterations', () => {
      const start = 'ABCD';
      const step = 2;
      const gen = cycle(start, step);
      gen.next();
      gen.next();
      [10, 12, 14, 16].forEach(() => {
        expect(gen.next().value).toBe(undefined);
      });
    });
  });

  describe('repeat', () => {
    test('should repeat given', () => {
      const start = 'ABCD';
      const gen = repeat(start);
      ['A', 'B', 'C', 'D'].forEach(() => {
        expect(gen.next().value).toBe('ABCD');
      });
    });

    test('should stop after n iterations', () => {
      const start = 10;
      const step = 2;
      const gen = repeat(start, step);
      gen.next();
      gen.next();
      [10, 12, 14, 16].forEach(() => {
        expect(gen.next().value).toBe(undefined);
      });
    });
  });
});
