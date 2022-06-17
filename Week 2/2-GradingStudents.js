/* HackerLand University has the following grading policy:

Every student receives a grade in the inclusive range from 0 to 100.
Any grade less than 40 is a failing grade.
Sam is a professor at the university and likes to round each student's grade according to these rules:

If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade. */

// TEST CASE //
const grades = [73, 67, 38, 33]


function gradingStudents(grades) {
    // Write your code here
    // round up if grade is 2 away from the next multiple of 5
    
    
    const newGrades = grades.map(grade => {
        if (grade < 38) return grade
        
        const secondDigit = grade.toString()[1]
        
        if (secondDigit === "3" || secondDigit === "8") {
            return grade + 2
        } else if (secondDigit === "4" || secondDigit === "9") {
            return grade + 1
        }
        
        return grade;
    })
    
    return newGrades
}