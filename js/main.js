//Class

'ES5 Class, when we had not Class';

// function Person(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;

//     // method
//     // this.sayMyName = function () {
//     //     console.log(`My name is ${this.firstName}`);
//     // };
// }

// // Prototype method
// Person.prototype.sayMyName = function () {
//     console.log(`My name is ${this.firstName}`);
// };

// let person1 = new Person('Ali', 'Rahimi', 33);

// // person1.firstName = 'Hamid';

// console.log(person1);

// person1.sayMyName();

'------------------------------------';
'ES6 Class, when Class came';

class Person {
    //سازنده
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    //Class Method (is Prototype Method)
    sayMyName(){
        console.log(`My name is ${this.firstName}`);
    }
}

const person1 = new Person('Ali', 'Rahimi', 33);

// person1.firstName = 'Hamid';

// person1.sayMyName();

console.log(person1);
