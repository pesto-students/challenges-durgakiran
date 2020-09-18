const limitFunctionCallCount = (cb, n) => {
  let invokedTimes = 0;
  return (...args) => {
    if (invokedTimes < n) {
      invokedTimes += 1;
      return cb(...args);
    }
    return null;
  };
};
export { limitFunctionCallCount };
