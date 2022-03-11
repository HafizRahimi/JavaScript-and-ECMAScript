// Project 04 (if, else and for loop) : Number is Even or Odd?

function numberRange(startNum, endNum) {
    for (let num = startNum; num <= endNum; num++) {
        if (num % 2 == 0) {
            console.log(num);
        }
    }
}
numberRange(24, 60);

// function evenOrOdd(limit){
//     for (let i = 0; i <= limit; i++) {
//         if (i % 2 ===0) {
//             console.log( i  + ' is Even');
//         } else {
//             console.log( i  + ' is Odd');
//         }
//     }
// }
// evenOrOdd(12)

function evenOrOdd(limit) {
    let numbersEven = [];
    let numbersOdd = [];
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0) numbersEven.push(i);
        else numbersOdd.push(i);
    }
    return { numbersEven, numbersOdd };
}

let rangeTo12 = evenOrOdd(12);

console.log(rangeTo12.numbersEven);
console.log(evenOrOdd(12).numbersOdd);
