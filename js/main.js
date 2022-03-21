// Learn Arrays Part_17
// *? Project-02-2: Includes Method
// forEach Method

let numbers = [1, 2, 3, 4];

function includes(array, searchElement) {
    let output= false
    array.forEach(element => {
        if (element === searchElement) {
            output = true
        }
    });
    console.log(output);
    return output
}

let number3= includes(numbers, 5)
console.log(number3);





