//Class Static Method

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName; 
        this.lastName = lastName;
        this.age = age;
    }

    sayMyName(){
        console.log(`My name is ${this.firstName}`);
    }

    static goodPerson (name){
        console.log(`${name} is a Goood person`);
    }
}

const person1 = new Person('Ali', 'Rahimi', 33);

person1.sayMyName();
// Person.sayMyName(); // Error

Person.goodPerson('Hamid');
// person1.goodPerson('Hamid'); // Error




