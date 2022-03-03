// Constructor Function
// For create a new object.


// Factory Function 
// camel notation: oneTwoThree
function personInfo(firstName, lastName) {
    return{
        firstName, 
        lastName,
        sayHello(){
            console.log('Hello!');
        }
    }
}

var person1 = personInfo('William', 'John');
console.log(person1);


// Constructor Function
// pascal notation: OneTwoThree
function PersonInfo(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (){
        console.log('Hello!');
    }
}


var person2 = new PersonInfo('Hafiz', 'Rahimi');
console.log(person2);




