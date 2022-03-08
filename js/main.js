// var is Function Scope.
// Let and Const are Block Scope.

// var 
{
    var x = 30;
}
console.log(x);

// Function Scope
function name(params) {
    var b = 19;
}
// console.log(b); // erorr


// ES6
// let and const 

// Global scope
const w = 23; 

// Block Scope
{
    let y = 10;
    const z = 40;
    console.log(y, z); 
    console.log(w);
    {
        // w = 700; //error 
        const w = 700; 
        console.log(w);
    }
}
// console.log(y, z); // error



