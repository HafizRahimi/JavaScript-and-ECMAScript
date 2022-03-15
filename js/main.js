// Learn Arrays Part_11  : Array to string and string to Array: Join method & Split method

// 1- The join() method returns an array as a string.The default is comma (,)
// 2- The split() method splits a string into an array of substrings.If (" ") is used as separator, the string is split between words.


// joined() method
let array = [1, 2, 3, 4];

let joined = array.join() // to string (,)
let joined1 = array.join(' ') // to string (' ')
let joined2 = array.join(' and ') // to string (' and ')
let joined3 = array.join('-') // to string ('-')

console.log(joined);
console.log(joined1);
console.log(joined2);
console.log(joined3);




// split method
let string = 'This is my message.'
let string1 = 'This-is-my-message.'


let splitted = string.split(' ') // to Array (' ')
let splitted1 = string1.split('-') // to Array ('-')

console.log(splitted);
console.log(splitted1);



// Example

let search = 'How to use SCSS with Express'

let searchLowerCase= search.toLocaleLowerCase(); // lower Case

let howToUseArr = searchLowerCase.split(' ', 3) // 

let searchArr= searchLowerCase.split(' '); //

let searchPath= searchArr.join('-')


console.log(searchLowerCase);
console.log(howToUseArr);
console.log(searchArr);
console.log(searchPath);














