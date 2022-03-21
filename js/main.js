// Learn Arrays Part_18
// *? Project-03: Except Function
// includes() Method, for of Loop and  forEach() Method

let numbers = [1, 2, 3, 4];

let number3= except(numbers, [1,3])

function except(array, excluded) {

    let output= []

    // * for of Loop
    // for (const element of array) {
    //     if (!excluded.includes(element)) {
    //         output.push(element)
    //     }
    // }

    // * forEch Method
    array.forEach(element => {
        if (!excluded.includes(element)) {
            output.push(element)
        }
    });

    return output

}

console.log(number3);





