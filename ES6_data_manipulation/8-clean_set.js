export default function cleanSet(set, startString) {
  const matching = [];
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      matching.push(value.slice(startString.length));
    }
  });
  return matching.join('-');
}
