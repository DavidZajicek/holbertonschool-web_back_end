export default function hasValuesFromArray(set, array) {
  let found = 0;

  array.forEach((element) => {
    if (set.has(element)) {
      found += 1;
    }
  });
  return found === array.length;
}
