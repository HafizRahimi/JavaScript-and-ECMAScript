// Add or Delete Property 


var person ={
    firstName: 'William'
}


// Add Property to person
person.lastName = 'John';
person.address = function(){
    console.log('Address');
}

console.log(person);


// Delete Property to person
delete person.firstName;

console.log(person);








