const {getHighestScoringStudent, getPassingStudents, getAverageScore, getLowestScoringStudent, analyseGrades} = require('./students')

const students = [
    { name: 'Alice', grade: 90 },
    { name: 'Bob', grade: 40 },
    { name: 'Charlie', grade: 70 }
]

describe('getHighestScoringStudent', () => {
    it('returns the highest scoring student', () => {
        expect(getHighestScoringStudent(students)).toEqual({ name: 'Alice', grade: 90 })
    })
})

describe('getLowestScoringStudent', () => {
    it('returns the highest scoring student', () => {
        expect(getLowestScoringStudent(students)).toEqual({ name: 'Bob', grade: 40 })
    })
})

describe('getPassingStudents', () => {
    it('returns array of names with grades >= 50 and sorted alphabetically', () => {
        expect(getPassingStudents(students)).toEqual(['Alice', 'Charlie'])
    })
})

describe('getAverageScore', () => {
    it('returns the average score across an array of students', () => {
        expect(getAverageScore(students)).toEqual(67)
    })
})

describe('analyseGrades', () => {
    it('returns a grade analysis for the average, highest, lowest and passing students', () => {
        expect(analyseGrades(students)).toEqual({
    average: 67,
    highest: { name: 'Alice', grade: 90 },
    lowest: { name: 'Bob', grade: 40 },
    passing: ['Alice', 'Charlie']
})
    })
})