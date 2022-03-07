// Function Arguments
// arguments is is a Object ( type: Symbol.iterator) and we can do loop

function sum(x, y) {
    console.log(arguments); // is a Object (Symbol.iterator)
    let total= 0;

    for (const iterator of arguments) {
        total = total + iterator
    }

    // for (const arg of arguments) {
    //     total += arg
    // }

    return total; 
    // return x + y;
}

// console.log(sum(2, 3));  //5
// console.log(sum(2));  //NaN : 2 + undefined

console.log(sum(2, 3, 9, 34, 6, 8 ,3 ));  // arguments