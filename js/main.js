//Primitives types and Reference types

// ---------------------------------------------
// Primitives types ==> number, string, boolean

var x = 19;
var y = x;

// x = 19
x = 10;
// x = 10 But y = 19


console.log(x);
console.log(y);


// ---------------------------------------------
// Reference types ==> object, array, function


var a = {value:30};
var b = a;


a.value = 12;
// a = {value:12} AND b = {value:12} 

console.log(a);
console.log(b);








