// Learn Arrays Part_04  : Finding an Element (Primitive type) 

// Primitive type: boolean, sting, number
// Reference type: function, array and object



let array = [1, 2, 3, 4, 2, 6, 2, 8];

// indexOf and lastIndexOf: index element
var a = array.indexOf(9); // index -1: has Not

var b = array.indexOf(2); // index 1
// array.indexOf(element, start)
var c = array.indexOf(2, 2); // index 4

var d = array.lastIndexOf(2); // index 6
// array.lastIndexOf(element, start)
var e = array.lastIndexOf(2, 5); // index 4

// includes: true or false
var x = array.includes(10); // false
var z = array.includes(4); // true


console.log(a);

console.log(b);
console.log(c);

console.log(d);
console.log(e);

console.log(x);
console.log(z);


