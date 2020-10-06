/**
 *
 * @param {Function} f is the function to be curried
 */
function curry(f) {
  // helper function which can take any number of args
  return function helper(...args) {
    if (args.length >= f.length) {
      return f(...args);
    }
    // recursion until we get required number of args
    return (...args2) => helper(...args.concat(args2));
  };
}

export {
  curry,
};
