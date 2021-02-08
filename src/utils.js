export function maxNumber(number) {
    const numbersToString = number.toString();
    const arrayOfNumbers = numbersToString.split('').map(n => +n);
    return arrayOfNumbers.reduce(function (a, b) {
        return Math.max(a, b);
    });
}

export function replaceBadWords(string, badWord) {
    const sentArray = string.split(' ');
    const result = sentArray.map((word) => {
        if (word.includes(badWord)) {
            word = word.replace(badWord, '****')
        }
        return word;
    })
    return result.join(' ');
}

export function getSubjects(student) {
    const subject = Object.keys(student.subjects);
    return subject.map(subject => subject[0].toLocaleUpperCase() + subject.slice(1).replace("_", " "));
}

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

export function getPairsOfStudents() {
    const girls = [];
    const boys = [];
    const pairs = [];
    for(let i = 0; i < students.length; i++) { 
        if(students[i][students[i].length-1] === "а" || students[i][students[i].length-1] === "я") {
            girls.push(students[i])
         } else {
             boys.push(students[i])
         }
    }
    for(let i = 0; i < students.length / 2; i++) {
        pairs.push([boys[i], girls[i]])
    }
    return pairs
}

function generateColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}
const body = document.querySelector('body');
const square = document.createElement('div');
square.classList.add('squares');
body.append(square);
function generateBlocks() {
    for (let i = 0; i < 25; i++) {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = generateColor();
        newDiv.style.width = '50px';
        newDiv.style.height = '50px';
        square.append(newDiv);
    }
}

export function generateBlocksInterval() {
    setInterval(() => {
        square.innerHTML = "";
        generateBlocks();
    }, 1000)
}
