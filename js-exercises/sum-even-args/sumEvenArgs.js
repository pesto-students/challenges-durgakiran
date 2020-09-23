// eslint-disable-next-line arrow-body-style
const sumEvenArgs = (...args) => {
  return args.reduce((accumulator, currentValue) => {
    const newAccumulator = (((currentValue % 2) === 0) ? accumulator + currentValue : accumulator);
    return newAccumulator;
  }, 0);
};

export { sumEvenArgs };
