// Learn Arrays Part_15: Reducing an Array (ES5)
// array.reduce()


let prices = [2000, 1000, 3000, 5000]; 


// The old way
let sum1 = 0;
for (const price of prices) {
    sum1 += price
}
console.log(sum1);

// let sum = 0;
// prices.forEach(price=> sum += price)
// console.log(sum);



// The New way : reduce()
let reduce = prices.reduce((pricesSum, price)=>{
    return pricesSum += price
},1000) // let pricesSum = 1000

console.log(reduce);


let reduce2 = prices.reduce((pricesSum2, price)=>{
    return pricesSum2 += price
},0) //let = pricesSum2 = 0
console.log(reduce2);


let reduce3 = prices.reduce((pricesSum3, price)=>pricesSum3 += price) // let pricesSum3 = 0
console.log(reduce3);



