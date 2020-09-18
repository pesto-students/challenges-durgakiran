function cacheFunction(cb) {
  const cache = {};

  return (...args) => {
    if (args.join(' ') in cache) return cache[args.join(' ')];

    const value = cb(...args);
    cache[args.join(' ')] = value;
    return cache[args.join(' ')];
  };
}

export {
  cacheFunction,
};
