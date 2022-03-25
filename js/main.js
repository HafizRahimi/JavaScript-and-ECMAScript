// Learn Arrays Part_21
// *? Project-06: GetMax Function
// reduce() Method and for of Loop

let numbers = [21, 12, 30, 40, 29, 34 ];


function getMax(array) {
    if (array.length === 0) {
        return undefined
    }
    
    // For of Loop
    // let max = 0;
    // for (const element of array) {
    //     if(max < element) max = element;
    // }
    // return max

    // for Loop
    // let max = array[0];
    // for (let i = 0; i < array.length; i++) {
    //     if(max < array[i]){
    //         max = array[i]
    //     }
    // }
    // return max


    // reduce() Method
    // return array.reduce((max, element) =>{
    //     if(max < element) return element;
    //     return max
    // })

    // OR
    return array.reduce((accumulator, current) => (current > accumulator) ? current : accumulator);
}

console.log(getMax(numbers));









