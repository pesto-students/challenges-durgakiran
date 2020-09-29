function countTheNumberOfDeletions(element) {
  const numberOfCharToDel = [...element].reduce((accumulator, currentValue, index) => {
    if (currentValue === element[index + 1]) {
      return accumulator + 1;
    }
    return accumulator;
  }, 0);
  return numberOfCharToDel;
}

function alternatingCharacters(arr) {
  const stack = arr.map(element => countTheNumberOfDeletions(element));
  return stack;
}

export { alternatingCharacters };
