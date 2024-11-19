export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    return array.map((student) => {
      return student.id;
    });
  } else {
    return [];
  }
}
