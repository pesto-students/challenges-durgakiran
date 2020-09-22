function rot13(...args) {
  const encodedMessage = args[0].toUpperCase();
  const originalCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const shiftedCharacters = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
  const decodedMessage = encodedMessage.split('').map((char) => {
    const decodedCharIndex = shiftedCharacters.indexOf(char);
    return decodedCharIndex !== -1 ? originalCharacters[decodedCharIndex] : char;
  }).join('');
  return decodedMessage;
}

export { rot13 };
