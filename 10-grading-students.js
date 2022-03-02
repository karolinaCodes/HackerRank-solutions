/* 
HackerLand University has the following grading policy:

Every student receives a  in the inclusive range from 0 to 100.
Any grade less than 40 is a failing grade.
Sam is a professor at the university and likes to round each student's grade according to these rules:

If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.


*/

function gradingStudents(grade) {
  let roundedGrades = [];
  grade.forEach(grade => {
    if (grade < 38) return roundedGrades.push(grade); // O(2)
    if (Math.ceil(grade / 5) * 5 - grade < 3) {
      // O(5)
      return roundedGrades.push(Math.ceil(grade / 5) * 5); // O(4)
    }
    roundedGrades.push(grade); // O(1)
  });
  // O(n)
  return roundedGrades;
  // O(12) + O(n) = O(n)
}

// DRIVER CODE
const grades = [73, 67, 38, 33];
console.log(gradingStudents(grades));
// output= [75, 67, 40, 33]
