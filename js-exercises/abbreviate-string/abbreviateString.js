import { isString } from 'util';

function abbreviateString(str) {
  if (!isString(str)) {
    throw new Error('Not a valid string');
  }
  const arrayOfWords = str.split(' ');
  const lastAbbreviation = arrayOfWords.length > 1 ? arrayOfWords[arrayOfWords.length - 1].split('')[0].toUpperCase() : null;
  return lastAbbreviation ? `${arrayOfWords[0]} ${lastAbbreviation}.` : str;
}
export { abbreviateString };
