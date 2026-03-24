const students = [
    { name: 'Alice', grade: 90 },
    { name: 'Bob', grade: 40 },
    { name: 'Charlie', grade: 70 }
]

const getHighestScoringStudent = (student_array) => {
    return student_array.reduce((highest, current) => {
        return current.grade > highest.grade ? current : highest;
    });
};

const getLowestScoringStudent = (student_array) => {
    return student_array.reduce((lowest, current) => {
        return current.grade < lowest.grade ? current : lowest;
    });
};

const getPassingStudents = (student_array) => {
    return student_array.filter((student) => student.grade >= 50)
    .map((student) => student.name)
    .sort()
}

const getAverageScore = (student_array) => {
    const total = student_array.reduce((acc, student) => 
    acc + student.grade, 0);

    return Math.ceil(total / students.length)
};

const analyseGrades = (student_array) => {
    return {
        average: getAverageScore(student_array),
        highest: getHighestScoringStudent(student_array),
        lowest: getLowestScoringStudent(student_array),
        passing: getPassingStudents(student_array)
    }
}


module.exports = {getHighestScoringStudent, getPassingStudents, getAverageScore, getLowestScoringStudent, analyseGrades}