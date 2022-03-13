// Learn Arrays Part_02  : Adding Elements
// Adding Elements:
// 1- add Beginning Array
// 2- add End Of Array
// 3- add Middle Array



let testArr=[{ElementName:'info', name:'Ali' },{ElementName:'address', name:'Ali' }]
let array = [5,6]

// Beginning 
array.unshift(1, 2, 3)
testArr.unshift({id:48374837})

// End 
array.push(7, 8)
testArr.push(2022)


// Middle 
// array.splice(start, delete, Elements)
array.splice(3,0,4)
testArr.splice(1,0,{job: 'developer'})




console.log(array);
console.log(testArr);