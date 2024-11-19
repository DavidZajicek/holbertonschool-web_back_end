export default function cleanSet(set, startString) {
  const matching = [];
  set.forEach((value) => {
    if (value.startsWith(startString) && startString !== '') {
      matching.push(value.slice(startString.length));
    }
  });
  return matching.join('-');
}
