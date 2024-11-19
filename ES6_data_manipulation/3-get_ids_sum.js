export default function getStudentIdsSum(listOfStudents) {
  if (Array.isArray(listOfStudents)) {
    return listOfStudents.reduce((total, student) => total + student.id, 0);
  }
}
