// Learn Arrays Part_10  : Iterating an Array
// 1- For of Loop
// 2- forEach Method


let first = [1, 2, 3, 4];
let second = [5, 6, 7, 8];


// for of Loop
for (const number of first) {
    console.log(number);
}



// .forEach()

second.forEach(number => {
    console.log(number);
});

second.forEach((number, index)=>{
    console.log(`${index} : ${number}`);
})




