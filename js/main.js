// Learn Arrays Part_13  : Filtering an Array
// array.filter()



let array = [2, 0,-3, 5, -8, 3, 7, -1, 6, 3]; 


// filter Method
let filtered = array.filter(value => value >= 0)

let filtered2 = array.filter((value,index)=>index < 3)

console.log(filtered);
console.log(filtered2);

filtered.sort()
console.log(filtered);
