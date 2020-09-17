function lastIndexOf(...args) {
  const givenValue = args[0]; 
  const givenArray = args[1]; 
  const { length } = givenArray;
  if (length <= 0) return -1;
  for (let i = (length - 1); i >= 0; i -= 1) { 
    if (givenArray[i] === givenValue) return i; 
  } 
  return -1;
}
export { lastIndexOf, };