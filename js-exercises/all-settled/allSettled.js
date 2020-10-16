async function allSettled(promises) {
    if (!promises || !Array.isArray(promises) || !promises.length) {
        throw TypeError(`input must be an array, got ${typeof promises}`);
    }

    const results = [];

    for (const promise of promises) {
        let result = null;
        try {
            // eslint-disable-next-line no-await-in-loop
            result = { value: await promise, status: 'fulfilled' };
        } catch (rejectedValue) {
            result = { Error: rejectedValue, status: 'rejected' };
        }
        results.push(result);
    }

    return new Promise((resolve) => {
        resolve(results);
    });
}

export { allSettled };
