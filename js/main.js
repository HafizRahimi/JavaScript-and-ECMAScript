// Learn Arrays Part_09  : Combine Arrays with Spread Operators (ES6)
// ...Array

let first = [1, 2, 3, 4];
let second = [5, 6, 7, 8];
let person = ['Ali', 'Sara', 'Jan']


// Spread Operators (ES6)
let combine = [...first, ...second];
let combine1 = [...first, 'Hi', 25, ...second];
let combine2 = [first[0], person[0], first[1] , first[2], first[3], ...second];

console.log(combine);
console.log(combine1);
console.log(combine2);


