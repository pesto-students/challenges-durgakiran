function flipArgs(cb) {
  return (...args) => {
    const { length } = args;
    const reversed = args.map((_, i) => args[length - i - 1]);
    cb(...reversed);
  };
}
export { flipArgs };
