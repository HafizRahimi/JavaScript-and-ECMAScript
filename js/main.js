// Date Object

const now = new Date();
console.log(typeof now);
console.log(now);

const myDate1 = new Date(2018, 11, 24, 12);
const myDate2 = new Date('december 24 2018 12:32:02');

console.log(myDate1);
console.log(myDate2);


//-----------------------------
// get method

var day = now.getDay();
var month = now.getMonth();
var year = now.getFullYear();

console.log(day);
console.log(month);
console.log(year);


//-----------------------------
// set method

// var setYear = now.setTime(2025)

// console.log(setYear);


//-----------------------------
// toISOString() method

var date1 = now.toISOString();

console.log(date1);



//-----------------------------
// toString() method

var date2 = now.toString();

console.log(date2);


//-----------------------------
// toString() method

var date2 = now.toString();

console.log(date2);





