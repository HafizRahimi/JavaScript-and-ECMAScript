// Project 02: factory function and constructor function


// factory function
function createAddress(city, street, zipCode) {
    return {
        city,
        street,
        zipCode,
    };
}

var myAddress = createAddress('uddevalla', 24, '878374');

console.log(myAddress);



//------------------------------------------------------
// constructor function
function CreateAddress(city, street, zipCode){
    this.city = city;
    this.street = street;
    this.zipCode = zipCode;
}

const aliAddress = new CreateAddress('Gothenborg', '12', '13123');
console.log(aliAddress);


