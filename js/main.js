// Learn Arrays Part_07  : Emptying an Array
// 1. .length
// 2. .pop()
// 3. .splice()




// way 1: array.length ==> Bad
let array1 = [1, 2, 3, 4, 5];

array1.length = 0;
console.log(array1);

// way 2: array.pop() ==> Bad
let array2 = [1, 2, 3, 4, 5];

while(array2.length > 0) array2.pop()
console.log(array2);


// way 3: array3.splice() ==> Good
let array3 = [1, 2, 3, 4, 5];

array3.splice(0,array3.length)
console.log(array3);