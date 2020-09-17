function balancedBraces(...args) {
  const stringArray = args[0].split('');
  const opens = ['(', '{', '['];
  const closes = [')', '}', ']'];
  const charToCheck = [];

  for (let i = 0; i < stringArray.length; i += 1) {
    if (opens.includes(stringArray[i])) charToCheck.push(stringArray[i]);
    else if (closes.includes(stringArray[i])) {
      const { length } = charToCheck;
      const lastLetter = charToCheck[length - 1];

      if ((lastLetter === '(' && stringArray[i] === ')')
            || (lastLetter === '{' && stringArray[i] === '}')
            || (lastLetter === '[' && stringArray[i] === ']')) charToCheck.pop();
      else return false;
    }
  }
  return (charToCheck.length === 0);
}
export { balancedBraces };
