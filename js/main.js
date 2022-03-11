// For in Loop (Object)

let obj = {
    Ali: 14,
    Hamid: 23,
    William: 13,
};

for (const key in obj) {
    console.log(key);
    console.log(obj[key]);
}




let alphabets = {
    a: 1,
    b: 2,
    c: 3,
};

for (const alphabet in alphabets) {
console.log(`${alphabet} : ${alphabets[alphabet]}`);
}
