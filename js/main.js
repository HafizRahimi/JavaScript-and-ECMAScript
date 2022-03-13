// Learn Arrays Part_06  : Arrow Function



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

function addCourse(name) {
    let id = courses.length + 1
    let course = {
        id,
        name
    }
    // console.log(id);
    courses.push(course)
}

addCourse('React')
addCourse('Angolar')



function deleteCourse(name) {
    let course = courses.findIndex(course => course.name === name)
    // console.log(course);
    courses.splice(course,1)
}

deleteCourse('React')



function updateCourse(name, nameChange) {
    let course = courses.findIndex(course => course.name === name);
    let id = courses.find(course => course.name === name).id;
    // console.log(course);
    let newCourse = {
        id,
        name : nameChange
    }
    courses.splice(course,1, newCourse)
}

updateCourse('JS' , 'Javascript')








function login(id, name){
    let userName = courses.find(course => course.name === name)
    let userId = courses.find(course => course.name === name).id

    if(userName !== undefined && userId === id) return console.log('Login');
    else return console.error('Course name or course id NOT FINDED ');

    // if(userName !== undefined) console.log(userName.name);
    // else console.log('Course Name not find');

    // if(userId == id) console.log(userId.id);
    // else console.log('Course Id not find');

}

login(3,'SASS')




// console.log(courses);








