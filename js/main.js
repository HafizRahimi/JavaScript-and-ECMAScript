// Learn Arrays Part_17
// *? Project-02: Includes Method

let numbers = [1, 2, 3, 4];

let number2= numbers.includes(2)
console.log(number2);


function includes(array, searchElement) {
    for (const element of array) {
        if (element === searchElement) {
            // return searchElement
            return true
        }
    }
    return false
}

let number3= includes(numbers, 3)
console.log(number3);





