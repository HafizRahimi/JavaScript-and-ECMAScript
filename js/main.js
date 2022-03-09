// Exercise
// Exceptions

// var numbers = [1, 2, 4, 5 ];
var numbers = 1;


try {
    var counter = count(numbers, 1);
    console.log(counter);
} catch (error) {
    console.log(error);
    console.log(error.message);

    // console.error(error);
    console.error(error.message);
}

function count(array, searchElement) {
    if (!Array.isArray(array)) {
        throw new Error('Please enter arrays');
    }
    return array.reduce((accumulator, current) => {
        var count = current === searchElement ? 1 : 0;
        return accumulator + count;
    }, 0);
}
