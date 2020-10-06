/**
 *
 * @param {string} token string to be tested for !
 */
function allowSpecialXor(token) {
  const wordTokens = token.split('!');
  let booleanCounter = 0;

  // should not end with !
  if (wordTokens[wordTokens.length - 1] === '!') {
    return false;
  }

  for (let i = 0; i < wordTokens.length; i += 1) {
    if (wordTokens[i] === 'true' || wordTokens[i] === 'false') {
      booleanCounter += 1;
    }
    if (!(wordTokens[i] === '' || wordTokens[i] === 'true' || wordTokens[i] === 'false')) {
      return false;
    }
  }
  return (booleanCounter === 1);
}

/**
 *
 * @param {string} ch character to test
 */
function isOperator(ch) {
  if (ch.length !== 1) {
    return false;
  }
  return /&|\||\^/.test(ch);
}

function checkOperatorIfOnlyOneWord(word) {
  return allowSpecialXor(word);
}

function checkOperatorBetweenTwoWords(expression) {
  const wordTokens = expression.trim().split(' ');

  if (wordTokens.length === 0) {
    return false;
  }

  if (wordTokens.length === 1) {
    return checkOperatorIfOnlyOneWord(wordTokens[0]);
  }

  if (wordTokens.length === 2) {
    return false;
  }

  for (let i = 2; i <= wordTokens.length; i += 2) {
    if (!(allowSpecialXor(wordTokens[i - 2])
              && allowSpecialXor(wordTokens[i])
              && isOperator(wordTokens[i - 1]))) {
      return false;
    }
  }

  return true;
}

function checkValidityOfBooleanExpression(expression) {
  if (typeof expression !== 'string') {
    return false;
  }

  return checkOperatorBetweenTwoWords(expression);
}

/**
 *
 * @param {number} length number of ! present in the string
 */
function evaluateFalseXORExpression(length) {
  let result = false;

  if (!length) {
    return result;
  }

  for (let i = 0; i < length; i += 1) {
    result = !result;
  }
  return result;
}

/**
 *
 * @param {number} length number of ! present in the string
 */
function evaluateTrueXORExpression(length) {
  let result = true;

  if (!length) {
    return result;
  }

  for (let i = 0; i < length; i += 1) {
    result = !result;
  }
  return result;
}

function evaluateSpecialXor(token) {
  let tmpToken = token;
  if (tmpToken === 0) {
    tmpToken = 'false';
  }

  if (tmpToken === 1) {
    tmpToken = 'true';
  }
  const wordTokens = tmpToken.split('!');
  const booleanValue = wordTokens[wordTokens.length - 1];

  if (booleanValue === 'false') {
    return evaluateFalseXORExpression(wordTokens.length - 1);
  }
  return evaluateTrueXORExpression(wordTokens.length - 1);
}

function booleanExpressionEvaluator(expression) {
  if (!checkValidityOfBooleanExpression(expression)) {
    throw TypeError('Expression invalid');
  }

  const wordTokens = expression.trim().split(' ');

  if (wordTokens.length === 1) {
    return evaluateSpecialXor(wordTokens[0]);
  }

  let value = null;

  for (let i = 2; i <= wordTokens.length; i += 2) {
    if (wordTokens[i - 1] === '|') {
      // eslint-disable-next-line no-bitwise
      value = (evaluateSpecialXor(wordTokens[i - 2]) | evaluateSpecialXor(wordTokens[i]));
    } else if (wordTokens[i - 1] === '&') {
      // eslint-disable-next-line no-bitwise
      value = (evaluateSpecialXor(wordTokens[i - 2]) & evaluateSpecialXor(wordTokens[i]));
    } else if (wordTokens[i - 1] === '^') {
      // eslint-disable-next-line no-bitwise
      value = (evaluateSpecialXor(wordTokens[i - 2]) ^ evaluateSpecialXor(wordTokens[i]));
    }
    wordTokens[i] = value;
  }

  return !!value;
}

export { booleanExpressionEvaluator };
