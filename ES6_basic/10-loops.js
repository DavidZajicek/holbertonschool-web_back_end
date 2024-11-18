export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  let index = 0;
  for (const s of array) {
    newArray[index] = appendString.concat(s);
    index += 1;
  }

  return newArray;
}
