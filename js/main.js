// Project 1: Sun of arrays argument
// sum(2, 5, 6)  ==> 13
// sum([2, 5, 6]) ==> 13

console.log(sum(2, 5, 6));
console.log(sum([2, 5, 6]));


function sum(...items) {
    console.log(items);
    
    if(items.length ===1 && Array.isArray(items[0])){
        items = items[0]
        console.log(items);
    }

    return items.reduce((a, b) => (a + b));
}


