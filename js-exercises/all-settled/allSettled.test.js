import { allSettled } from './allSettled';

describe('allsettled', () => {
    test('should take array of objects or primitives', async () => {
        await expect(allSettled()).rejects.toThrow(TypeError);
        await expect(allSettled(1)).rejects.toThrow(TypeError);
    });
    test('should return a promise', async () => {
        expect(typeof allSettled([1]).then).toBe('function');
        expect(await allSettled([1])).toStrictEqual([
            { status: 'fulfilled', value: 1 },
        ]);
        expect(await allSettled([1, {}])).toStrictEqual([
            { status: 'fulfilled', value: 1 },
            { status: 'fulfilled', value: {} },
        ]);
        const promise1 = Promise.resolve(3);
        const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
        const promises = [promise1, promise2];
        expect(await allSettled(promises)).toStrictEqual([
            { status: 'fulfilled', value: 3 },
            { status: 'rejected', Error: 'foo' },
        ]);
    });
});
