// Math Method Objects

//Method Math


const m = Math;
console.log(m);

//-----------------------------------------------
// Math.round()

const rMethod = Math.round(2.5043); // 3
// const rMethod = Math.round(2.3043); //2

// const rMethod = Math.round(-2.5043) // -3
// const rMethod = Math.round(-2.3043) // -2

console.log('round Method: '+rMethod);
console.log('--------------------------------------');


//-----------------------------------------------
// Math.ceil()
// Math.floor()

const cMethod = Math.ceil(2.4043) //3
// const cMethod = Math.ceil(2.5043) //3
// const cMethod = Math.ceil(-2.5043) //-2


const fMethod = Math.floor(2.4043) //2
// const fMethod = Math.floor(2.5043) //2
// const fMethod = Math.floor(-2.5043) //-3


console.log('ceil Method: '+cMethod);
console.log('floor Method: '+fMethod);
console.log('--------------------------------------');


//-----------------------------------------------
//Math.trunc()

// const tMethod = Math.trunc(2.8) // 2
const tMethod = Math.trunc(-2.8) // -2

console.log('trunc Method: '+tMethod);
console.log('--------------------------------------');



//-----------------------------------------------
// Math.sign()

// const sMethod = Math.sign(10); // 1
const sMethod = Math.sign(0); // 0
// const sMethod = Math.sign(-30); // -1

console.log('sign Method: '+sMethod);
console.log('--------------------------------------');


//-----------------------------------------------
// Math.pow()

const pMethod = Math.pow(2,3) // 2 * 2 * 2 = 8

console.log('pow Method: '+pMethod);
console.log('--------------------------------------');


//-----------------------------------------------
// Math.sqrt()

const sqMethod = Math.sqrt(9) // 

console.log('sqrt Method: '+sqMethod);
console.log('--------------------------------------');


//-----------------------------------------------
// Math.abs()

// const aMethod = Math.abs(9) // 9
const aMethod = Math.abs(-7) // 7

console.log('abs Method: '+aMethod);
console.log('--------------------------------------');


//-----------------------------------------------
// Math.max()

const maxMethod = Math.max(12, 14, 30, 5)

console.log('max Method: '+maxMethod);
console.log('--------------------------------------');


//-----------------------------------------------
// Math.min()

const minMethod = Math.min(12, 14, 30, 5)

console.log('max Method: '+minMethod);
console.log('--------------------------------------');


//-----------------------------------------------
// Math.min()

// const raMethod =Math.random() // tal : 0 to 1
// const raMethod =Math.random() * 21 // tal : 0 to 21

// const raMethod =Math.trunc( Math.random() * 21 )// tal : 0 to 21

const raMethod =Math.round( Math.random() * 21 )// tal : 0 to 21

console.log('random Method: '+raMethod);
console.log('--------------------------------------');


//-----------------------------------------------

