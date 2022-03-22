// Learn Arrays Part_19
// *? Project-04: Moving Function
// splice(,1,), splice(,0,) Method and Spread Operators[...array]

let numbers = [1, 2, 3, 4];

let nowNumbers = move(numbers, 4, -1);

function move(array, number, offset) {
    let index = number - 1;
    let position = index + offset;

    if (position >= array.length || position < 0) {
        console.log('ERRRRRRR');
        return;
    } else {
        let output = [...array];
        let element = output.splice(index, 1)[0];
        console.log(element);
        output.splice(position, 0, element);
        return output;
    }
}

console.log(nowNumbers);
