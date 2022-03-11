// Project 02 (if, else) : iron hack 
// number % 3 ==> iron
// number % 5 ==> hack


function ironHack(number) {
    if (typeof number !== 'number') {
        console.log('not a number');
    }
    if (number % 3 == 0 &&number % 5 == 0) {
        console.log('Iron  and Hack');
    }else if (number % 5 == 0) {
        console.log('Hack');
    }else if (number % 3 == 0 ) {
        console.log('Iron');
    } 
    else{
        console.log(number);
    }
}


ironHack(30)







