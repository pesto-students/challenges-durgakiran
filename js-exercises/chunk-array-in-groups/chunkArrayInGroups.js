function chunkArrayInGroups(array, chunkSize) {
  const twoDimensionalArray = [];
  let startIndex = 0;

  for (let i = 0; i < array.length; i += chunkSize) {
    twoDimensionalArray.push(array.slice(startIndex, (startIndex + chunkSize)));
    startIndex += chunkSize;
  }
  return twoDimensionalArray;
}

export {
  chunkArrayInGroups,
};
