// Learn Arrays Part_05  : Finding an Element (Reference type)

// Primitive type: boolean, sting, number
// Reference type: function, array and object

let courses = [
    {
        id: 1,
        name: 'JS',
    },
    {
        id: 2,
        name: 'SASS',
    },
];

// array.find(): elements value
var id3 = courses.find(course=> course.id === 3) // undefined
var sass = courses.find(course=> course.name === 'SASS')
var firstCourse = courses.find(course=> course.id === 1)

// array.findIndex(): elements index
var react = courses.findIndex(course=> course.name === 'React') // index -1 : Has Not
var js = courses.findIndex(course=> course.name === 'JS') // index 0



console.log(id3);
console.log(sass);
console.log(firstCourse);

console.log(react);
console.log(js);




