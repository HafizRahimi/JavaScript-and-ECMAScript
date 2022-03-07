// Function Declaration 
// Function Expression
// Hoisting

//------------------------------------------------
// Hoisting
movie();    //Run

// Function Declaration
function movie() {
    console.log('Watching movie');
}

// movie();

//------------------------------------------------
// Hoisting
video();  // undefined

// console.log(x); // undefined
// var x = 3;


//  Function Expression
var video = function () {
    console.log('Watching video');
};

// video();

// let watchVideo = video;
// watchVideo();
