function isObject(argument) {
  if (typeof argument === 'object') return true;
  return false;
}

function isFunction(argument) {
  if (typeof argument === 'function') return true;
  return false;
}

function compareDeeply(obj1, obj2, matchDescriptors = false) {
  // returns keys of obj1, not the parent object's
  const objectOneKeys = Object.keys(obj1);
  const objectTwoKeys = Object.keys(obj2);

  if (objectOneKeys.length !== objectTwoKeys.length) {
    return false;
  }

  for (const key of objectTwoKeys) {
    const objOneValue = obj1[key];
    const objTwoValue = obj2[key];

    if (matchDescriptors) {
      const objOneValueDescriptors = Object.getOwnPropertyDescriptor(obj1, key);
      const objTwoValueDescriptors = Object.getOwnPropertyDescriptor(obj2, key);

      if (!compareDeeply(objOneValueDescriptors, objTwoValueDescriptors, false)) {
        return false;
      }
    }

    if (isFunction(objOneValue) || isFunction(objTwoValue)) {
      return false;
    }

    const areObjects = isObject(objOneValue) && isObject(objTwoValue);

    if (areObjects && !compareDeeply(objOneValue, objTwoValue)) {
      return false;
    }

    if (!areObjects && objOneValue !== objTwoValue) {
      return false;
    }
  }
  return true;
}

function deepEqual(...args) {
  if (!args[0] || !args[1]) {
    throw new TypeError('deepEqual function needs at-least two arguments');
  }

  // if both objects have same reference and value then they are equal.
  if (args[0] === args[1]) {
    return true;
  }

  if (isFunction(args[0]) || isFunction(args[1])) {
    return false;
  }

  if (isObject(args[0]) && isObject(args[1])) {
    const matchDescriptors = args[2] || false;
    return compareDeeply(args[0], args[1], matchDescriptors);
  }

  return false;
}

export {
  deepEqual,
};
