// Project 05 (if, else and for in loop) : is string value?
// for in loop is for loop in Object 

let obj = {
    a: 'ali',
    b: 23,
    c: false,
    d: 'car',
    e: 23,
};

let person = {
    name : 'Navid',
    family: 'Nori',
    age: '20',
    isDeveloper: false
}

// console.log( typeof obj.b);

// isStringValue(obj);
isStringValue(person);


function isStringValue(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'string') {
            console.log(key +' : '+ obj[key]);
        }
    }
}
