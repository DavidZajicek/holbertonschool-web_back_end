export default function createInt8TypedArray(length, position, value) {
  try {
    const arrayBuffer = new ArrayBuffer(length);
    const array = new DataView(arrayBuffer);
    array.setInt8(position, value);
    return array;
  } catch (error) {
    throw new Error('Position outside range');
  }
}
