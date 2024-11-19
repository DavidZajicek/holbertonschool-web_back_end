export default function createInt8TypedArray(length, position, value) {
  try {
    const arrayBuffer = new ArrayBuffer(length);
    const array = new Int8Array(arrayBuffer);
    array.set([value], position);
    return array;
  } catch (error) {
    throw new Error('Position outside range');
  }
}
