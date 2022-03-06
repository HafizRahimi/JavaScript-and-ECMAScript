// Project 03: obj1 === obj2 


var address1 = new CreateAddress('uddevalla', 24, '878374');
var address2 = new CreateAddress('uddevalla', 24, '878374');

console.log(areSame(address1, address2)); // false 
console.log(areEqual(address1, address2));

//------------------------------------------------------
// constructor function
function CreateAddress(city, street, zipCode){
    this.city = city;
    this.street = street;
    this.zipCode = zipCode;
}



function areSame(obj1, obj2) {
    return obj1 === obj2;
}


function areEqual(obj1, obj2) {
    return obj1.city === obj2.city && 
    obj1.street === obj2.street && 
    obj1.zipCode === obj2.zipCode
}



