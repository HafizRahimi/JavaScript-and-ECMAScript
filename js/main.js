// Rest Operators (...args)  and args is array
// reduce is a array methods (video 15 arrays)

// Rest Operators
function sum(...args) {
    // console.log(args);  // args is array

    // reduce method
    // let sum = args.reduce((total, arg)=> total += arg)
    // return sum

    //or
    return args.reduce((a, b) => (a += b));
}

// console.log('Sum: '+ sum(2, 9, 5, 8, 7, 3));


function ShowTotals(a, b, ...args) {
    console.log(a);
    console.log(b);
    console.log(args);
}
ShowTotals(1, 2, 3, 4, 5, 6, 7)


