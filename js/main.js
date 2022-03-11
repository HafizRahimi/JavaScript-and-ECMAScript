// Project 02 (if, else) : is land scape 


function isLand(w, h) {
    if (w>h) console.log('True');
    else console.log('false');
}
isLand(15, 12)



// function isLandScape(width, height) {
//     return (width > height)? console.log('True'): console.log('False');
// }
// isLandScape(600,500);

function isLandScape(width, height) {
    return (width > height);
}

console.log(isLandScape(300,500));





