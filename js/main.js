//Class Setter And Getter



class Person {
    //سازنده
    constructor(firstName, lastName, age) {
        this._firstName = firstName; // (_) is For private FirstName
        this._lastName = lastName;
        this._age = age;
    }

    set firstName(newFirstName) {
        console.log('Setting firstName');
        this._firstName = newFirstName;
    }

    get firstName() {
        console.log('Getting firstName');
        return this.firstName;
    }

    //Class Method (is Prototype Method)
    sayMyName(){
        console.log(`My name is ${this.firstName}`);
    }
}

const person1 = new Person('Ali', 'Rahimi', 33);

person1.firstName = 'Hamid';

// person1.sayMyName();

console.log(person1);
