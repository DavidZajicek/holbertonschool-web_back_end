export default function appendToEachArrayValue(array, appendString) {
  for (let s of array) {
    s = appendString + s;
  }

  return array;
}
