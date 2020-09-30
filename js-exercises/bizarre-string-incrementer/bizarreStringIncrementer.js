// Start your implementation here
function extractLastInStringNumber(str) {
  // eslint-disable-next-line no-restricted-globals
  if (!isNaN(str)) return str;

  let numberArray = [];
  for (let i = 0; i < str.length; i += 1) {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(str[i])) numberArray.push(str[i]);
    else numberArray = [];
  }

  return numberArray;
}

function bizarreStringIncrementer(str) {
  const numberArray = extractLastInStringNumber(str);
  const { length } = numberArray;
  let number = '';
  let finalNumber = '';

  for (const k of numberArray) {
    if (+k !== 0) number += String(k);
  }

  const numberAfterAddition = String(+number + 1);
  let index = 0;
  while (index < (length - numberAfterAddition.length)) {
    finalNumber += '0';
    index += 1;
  }

  let firstPartString = '';

  for (let i = 0; i < (str.length - length); i += 1) {
    firstPartString += str[i];
  }

  return firstPartString + finalNumber + numberAfterAddition;
}

export {
  bizarreStringIncrementer,
};
