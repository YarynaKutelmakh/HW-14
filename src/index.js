import { maxNumber, replaceBadWords, getSubjects, getPairsOfStudents, generateBlocksInterval } from './utils';
import './index.css';

console.log('homework-3');
console.log(maxNumber(9351));

console.log('homework-4');
console.log(getPairsOfStudents());

console.log('homework-5');
console.log(replaceBadWords("It's bullshit!", "shit"));

console.log('homework-6');
const student = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];
console.log(getSubjects(student[0]));

generateBlocksInterval();