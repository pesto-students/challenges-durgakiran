function sumFibs(num) {
  if (num <= 0) return num;
  let prevNumber = 0;
  let currentNumber = 1;
  let result = 0;
  while (currentNumber < num) {
    if (currentNumber % 2 !== 0) {
      result += currentNumber;
    }

    currentNumber += prevNumber;
    prevNumber = currentNumber - prevNumber;
  }
  return result;
}

function cacheFunction(fn) {
  const cache = {};

  return (n) => {
    if (n in cache) {
      return cache[n];
    }
    cache[n] = fn(n);
    return cache[n];
  };
}

export { sumFibs, cacheFunction };
