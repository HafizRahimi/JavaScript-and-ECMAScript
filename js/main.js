// Factory Functions
// For create a new object.


var person1 = {
    firstName: 'Hafiz',
    lastName: 'Rahimi',
}

 
// Factory Function
function person(firstName, lastName, age) {
    // return{
    //     firstName: firstName,
    //     lastName: lastName,
    //     age: age,
    //     logAge (){
    //         console.log( firstName + ' is  ' + age);
    //     }
    // }

    //ES6
    return{
        firstName, 
        lastName,
        age,
        logAge (){
            console.log( firstName + ' is  ' + age);
        }
    }
}


var person2 = person('William', 'John',22);
var person3 = person('Hamed', 'Navi',15);
var person4 = person('Navid', 'Hamidi',18);



console.log(person1.firstName);
console.log(person2.firstName);
console.log(person3.firstName);
console.log(person4.logAge());




