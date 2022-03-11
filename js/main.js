// For Of Loop ES6 (Arrays)


// for in (object)
let alphabets = {
    a: 1,
    b: 2,
    c: 3,
};

for (const alphabet in alphabets) {
console.log(`${alphabet} : ${alphabets[alphabet]}`);
}


// for of (Arrays)
let arr= ['Ali', 'Navid', 21]
console.log(typeof(arr));

for (const iterator of arr) {
    console.log(iterator);
}

// for in (Arrays)
for (const index in arr) {
    console.log(index);
    console.log(arr[index]);
}

//Do not use for in over an Array if the index order is important.
//It is better to use 
//a for loop, 
//a for of loop, 
//or Array.forEach() 
//when the order is important. 
