let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

// const averagePoints = (arr, subject) => {
//     if students.results.includes(subject);
//         let sumMarks = 0;
//         for (let i = 0; i < subjects.length; i++) {
//             console.log(subjects[i]);    
//             sumMarks +=  arr[i].results.subject;
//         }
//     return sumMarks / arr.length;
//  }
//  let result = averagePoints(students,"english");
//  console.log(result);
console.log(students);
for (let i =0; i < students.length; i++) {
    console.log(students.results);
}