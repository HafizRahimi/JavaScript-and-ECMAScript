//Class Inheritance (extends)

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    sayMyName() {
        console.log(`My name is ${this.firstName}`);
    }
}

// extends From Person Class
class Programmer extends Person {
    constructor(job, ...personInfo){
        super(...personInfo); // for call Person Class constructor
        this.job = job;
    }

    sayMyName() {
        console.log(`My name is ${this.firstName} and I am a ${this.job}`);
    }
}


// New Class From Class Person
const personInfo1 = ['Hamid', 'Nori', 45];
const person1 = new Person(...personInfo1);

// console.log(person1);
// person1.sayMyName()


// New Class From Class Programmer
const personInfo2 = ['Programmer','Hafiz', 'Rahimi', 25];
const person2 = new Programmer(...personInfo2);

console.log(person2);
person2.sayMyName()
