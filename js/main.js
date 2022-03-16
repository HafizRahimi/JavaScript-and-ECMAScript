// Learn Arrays Part_11  : Sorting an Array (Primitives Types)
// 1- array.sort()
// 2- array.reverse()




let array1 = [2, 9, 5, 8, 3, 7, 1, 6, 3]; 
let array2 = ["b", "d", 'c', 'a', 'e', 'g', 'z']; 
let array3 = ["b", "d", 'C', 'a', 'E', 'g', 'z']; 

// 1- sort Method
array1.sort();
console.log(array1);

array2.sort();
console.log(array2);

array3.sort();
console.log(array3);

// 2- reverse Method
array1.reverse();
// OR: sort((a, b) => b-a)
// array1.sort((a, b) => b-a);
console.log(array1);

array2.reverse()
console.log(array2);

array3.reverse()
console.log(array3);