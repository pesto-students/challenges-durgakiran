function setUnion(setOne, setTwo) {
  const unionSet = new Set();
  for (const element of setOne) {
    unionSet.add(element);
  }
  for (const element of setTwo) {
    unionSet.add(element);
  }
  return unionSet;
}

function setIntersection(setOne, setTwo) {
  const intersectionSet = new Set();
  for (const element of setOne) {
    if (setTwo.has(element)) {
      intersectionSet.add(element);
    }
  }
  return intersectionSet;
}

function setDifference(setOne, setTwo) {
  const differenceSet = new Set();
  for (const element of setOne) {
    if (!setTwo.has(element)) {
      differenceSet.add(element);
    }
  }
  return differenceSet;
}

function diffArray(arrayOne, arrayTwo) {
  const setOne = new Set(arrayOne);
  const setTwo = new Set(arrayTwo);

  return Array.from(setDifference(setUnion(setOne, setTwo), setIntersection(setOne, setTwo)));
}

export {
  diffArray,
};
