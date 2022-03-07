// Default Parameters (ES6)

// the old way
function sum(a, b, c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;

    return a + b + c;
}

console.log(sum(2)); // 2
console.log(sum(2, 9)); // 11
console.log(sum(5, 15, 10)); // 30

//--------------------------------------------
// the new way ES6
function sum1(a = 0, b = 0, c = 0) {
    return a + b + c;
}

console.log(sum1(13, 7));
console.log(sum1(13));

function sum2(b, a = 0, c = 0) {
    return a + b + c;
}

console.log(sum2(13));
console.log(sum2(13, 7));
