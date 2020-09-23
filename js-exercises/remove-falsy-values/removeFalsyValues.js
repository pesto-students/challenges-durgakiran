/**
 *
 * @param {Array} array
 */

function removeFalsyValues(array) {
  return array.filter((value) => !!value);
}

export {
  removeFalsyValues,
};
