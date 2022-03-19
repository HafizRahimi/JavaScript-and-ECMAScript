// Learn Arrays Part_14  : Mapping an Array
// array.map()

// map method and forEach method are for Iterating an Array
// map method is 70% faster Than forEach method.
// map method creates a now array form the original array



let array = [2, 0, 3, 7, -1, 6, 3]; 

// For Each method
let arr = [];
array.forEach((index) =>{
    arr.push(index + 1)
    return arr.sort()
})

console.log(array);
console.log(arr);


// Map method
let arr2= array.map(index =>{
    // return{value: index}
    return index + 1
})
arr2.sort()
console.log(arr2);


let arr3 = array.map(function(number){
    return number + 20
})
console.log(arr3);


let arr4 = array.map(number =>number + 100)
console.log(arr4);


let arr5 = array.map(index =>{
    return{value: index}
})
let arr6 = array.map(index => ({value: index}))

console.log(arr5);
console.log(arr6);





