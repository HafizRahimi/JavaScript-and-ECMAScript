// Project 01 : Max of Two Number


function maxOf(x,y){
    if(x>y) return x
    return y
}
var numMax= maxOf(8,5);
console.log(numMax);



// function maXNumber(num1, num2) {
//     if (num1> num2) {
//         console.log(num1);
//     } else {
//         console.log(num2);
//     }
// }

function maXNumber(num1, num2) {
    if (num1> num2)console.log(num1);
    else console.log(num2);
}
maXNumber(10, 12)


function maxNumber(num1, num2) {
    return (num1 > num2) ? console.log(num1): console.log(num2);
}

maxNumber(100,44)