// Object Basics


var firstName = 'Hafiz'; 
var lastName = 'Rahimi'; 
var age = 45; 
var isMarry = false; 


var person = {
    firstName: 'Hafiz',
    lastName: 'Rahimi',
    county:["Uddevalla", 'Smögen'],
    age: 45,
    isMarry: false,
    address: function (){
        console.log('Address');
    }
}


console.log(person.address());

console.log(person.county[1]);

console.log(person.firstName);
console.log(person['firstName']);


person.age = 33;
console.log(person.age);

