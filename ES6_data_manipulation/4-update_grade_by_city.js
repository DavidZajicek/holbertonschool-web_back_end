export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  return listOfStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const newStudent = student;
      for (const newGrade of newGrades) {
        if (student.id === newGrade.studentId) {
          newStudent.grade = newGrade.grade;
        }
      }
      if (newStudent.grade === undefined) {
        newStudent.grade = 'N/A';
      }
      return newStudent;
    });
}
