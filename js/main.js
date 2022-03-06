// Project 01: Create a object and log 

// Create a new object
var address ={
    city: 'uddevalla',
    street: 24,
    zipcode: 'ddd'
}

// For in (loop Object)
function showAddress(arg){
    for (const key in arg) {
        // back tick
        console.log(`${key}:  ${arg[key]}`);
    }
}


showAddress(address)


