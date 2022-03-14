// Learn Arrays Part_08  : Combine & Slice
// Combine : array.concat()
// Slice : array.slice()

let first = [1, 2, 3, 4];
let second = [5, 6, 7, 8];


// Combine
let combine1 = first.concat(5,6);
let combine2 = first.concat(second);
let combine3 = combine2.concat(9,10);


console.log(combine1);
console.log(combine2);
console.log(combine3);


// Slice 
let slice1 = combine3.slice(0,5)
let slice2 = combine3.slice(5)


console.log(slice1);
console.log(slice2);
