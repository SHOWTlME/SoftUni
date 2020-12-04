function schoolGrades(arr) {

    let studentGrades = new Map();

    for (const line of arr) {
        let tokens = line.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);


        if (!studentGrades.has(name)) {
            studentGrades.set(name, []);
        }
        let existing = studentGrades.get(name);
        for (const grade of grades) {
            existing.push(grade);
        }
    }

    let newStudentGrades = Array.from(studentGrades);
    newStudentGrades.sort(calculateAverage);
    for (const element of newStudentGrades) {
        console.log(`${element[0]}: ${element[1].join(', ')}`);
    }

    function calculateAverage([nameA, gradeA], [nameB, gradeB]) {
        let sumGradeA = 0;

        gradeA.forEach(x => sumGradeA += x);
        sumGradeA /= gradeA.length;
        let sumGradeB = 0;

        gradeB.forEach(x => sumGradeB += x);
        sumGradeB /= gradeB.length;

        return sumGradeA - sumGradeB;
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);