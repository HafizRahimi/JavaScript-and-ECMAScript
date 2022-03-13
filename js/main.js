// Learn Arrays Part_03  : Removing Elements
// Adding Elements:
// 1- delete Beginning Array
// 2- delete End Of Array
// 3- delete Middle Array


let array = [1, 2, 3, 4, 5, 6, 7, 8]

// Beginning 
let first = array.shift()


// End 
let last = array.pop()


// Middle 
// array.splice(start, delete, elements)
// array.splice(2,1) // delete 1 element
// array.splice(2, 2) // delete 2 element
array.splice(2, 2, 10) // delete 2 element and add element 10


console.log(array);
console.log(first);
console.log(last);
