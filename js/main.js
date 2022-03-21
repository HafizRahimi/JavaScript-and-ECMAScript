// Learn Arrays Part_16 
// *? Project-01: Arrays Between Range

function arrayBetweenRage(min,max) {
    let output=[];
    for (let i = min; i <= max; i++) {
        output.push(i) // * Push()
    }
    return output
}

let numbers= arrayBetweenRage(-9, 5)
console.log(numbers);



