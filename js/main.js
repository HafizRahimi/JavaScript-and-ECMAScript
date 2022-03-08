// Arrow Function (ES6)

function sum(a, b) {
    return a + b;
}

// Arrow Function (ES6)

// var multiple = (a, b) =>{
//     return a * b
// }

var multiple = (a, b) => a * b;

var array = [1, 2, 3, 4, 5];
function count(array) {
    return array.forEach(element => console.log(element));
}

count(array)

console.log(sum(2, 8));

console.log(multiple(5, 5));
