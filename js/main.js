// Cloning an object
// Copy a objects properties to other object

// person object
var person = {
    firstName: 'William',
    lastName: 'John',
};

//----------------------------------------
// The old way (for in)
var personInfo = {};

for (const key in person) {
    personInfo[key] = person[key];
}
console.log(personInfo);

//----------------------------------------
// The new way (Object.assign())
var newPerson = {};

Object.assign(newPerson, person);
console.log(newPerson);

var newPerson1 = Object.assign({}, person);
console.log(newPerson1);

var newPerson2 = Object.assign({ age: 43 }, person);
console.log(newPerson2);
