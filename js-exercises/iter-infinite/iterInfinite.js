function* count(start, step = 1) {
  if (!Number.isSafeInteger(start)) {
    throw TypeError(`First arg must be a number. Given, ${start}`);
  }
  if (!Number.isSafeInteger(step)) {
    throw TypeError(`start must be a number. Given, ${step}`);
  }

  let currentValue = start;
  while (true) {
    yield currentValue;
    currentValue += step;
  }
}

function* cycle(start, n) {
  if (!(typeof start[Symbol.iterator] === 'function')) {
    throw TypeError(`First arg must be a iterator. Given, ${typeof start}`);
  }

  if (n && !Number.isSafeInteger(n)) {
    throw TypeError(`Second arg must be a valid number. Given, ${typeof n}`);
  }

  let iterant = start[Symbol.iterator]();
  let currentIterNumber = 0;
  while (true) {
    if (!n || (currentIterNumber < n)) {
      let currentValue = iterant.next();

      if (currentValue.done) {
        iterant = start[Symbol.iterator]();
        currentValue = iterant.next();
      }

      currentIterNumber += 1;

      yield currentValue.value;
    } else {
      return;
    }
  }
}

function* repeat(start, n) {
  if ((typeof start === 'function')) {
    throw TypeError(`First arg must be a iterator. Given, ${typeof start}`);
  }

  if (n && !Number.isSafeInteger(n)) {
    throw TypeError(`Second arg must be a valid number. Given, ${typeof n}`);
  }

  let currentIterNumber = 0;
  while (true) {
    if (!n || (currentIterNumber < n)) {
      currentIterNumber += 1;

      yield start;
    } else {
      return;
    }
  }
}

export {
  count,
  cycle,
  repeat,
};
